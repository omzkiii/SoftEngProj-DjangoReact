from django.shortcuts import get_object_or_404
from requests import Response
from rest_framework.generics import ListAPIView, ListCreateAPIView, UpdateAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.views import APIView
from .serializers import ProductSerializer, ProductUpdateSerializer, DiscountSerializer, SingleOrderSerializer
from .serializers import CartSerializer, CartUpdateSerializer, OrderSerializer, OrderProductSerializer
from .models import Product, Discount, InventoryTxn, Cart, Order, OrderProduct, Customer
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from .permissions import IsCartOwner, IsOwnerOrReadOnly
from django.db.models import Q



"""
Product-related views:
ProductListCreateView(for admin use only) - viewing all and adding products
ProductListView - to get all products
ProductUpdateView - update single product using id
ProductRetrieveView - retrieve single product using id
"""

class ProductListCreateView(APIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]
    def get(self, request):
        products = Product.objects.all()
        serialized_prod = ProductSerializer(products, many=True)
        return Response(serialized_prod.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        product = serializer.save()
        serialized_prod = ProductSerializer(product) 

        inv_txn = InventoryTxn(product=product, date=product.date_created, txn_type=InventoryTxn.ADD, quantity=product.quantity)
        inv_txn.save()
        
        return Response(serialized_prod.data, status=status.HTTP_201_CREATED)


class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductCategoryListView(ListAPIView):

    def get_queryset(self):
        category = self.kwargs.get('category')  
        return Product.objects.filter(category=category)
    serializer_class = ProductSerializer


from django.http import Http404

class ProductUpdateView(APIView):
    serializer_class = ProductUpdateSerializer
    permission_classes = [IsAdminUser]

    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404
        
    def get(self, request, pk, *args, **kwargs):
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        
        return Response(serializer.data)


    def put(self, request, pk, *args, **kwargs):
        product = self.get_object(pk)
        prev_qty = product.quantity
        serializer = ProductUpdateSerializer(product, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        change_in_qty = product.quantity - prev_qty

        if change_in_qty > 0:
            inv_txn = InventoryTxn(product=product, txn_type=InventoryTxn.ADD, quantity=change_in_qty)
            inv_txn.save()
        elif change_in_qty < 0:
            inv_txn = InventoryTxn(product=product, txn_type=InventoryTxn.OTHERS, quantity=change_in_qty)
            inv_txn.save()

        return Response(serializer.data)


class ProductRetrieveView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'pk'


class ProductSearchView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        query = self.request.query_params.get('q', '')
        if query:
            return Product.objects.filter(Q(name__icontains=query) | Q(description__icontains=query))
        else:
            return Product.objects.all()


"""
Discount-related views:
DiscountListCreateView(for admin use only) - view all and create discounts
DiscountRetrieveView - to retrieve single discount
"""
class DiscountListCreateView(ListCreateAPIView):
    queryset = Discount.objects.all()
    serializer_class = DiscountSerializer
    permission_classes = [IsAdminUser]

class DiscountRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Discount.objects.all()
    serializer_class = DiscountSerializer
    lookup_field = 'pk'


"""
Cart-related views
"""

class CartListCreateView(ListCreateAPIView):
    def get_queryset(self):
        customer = self.kwargs.get('customer')  
        return Cart.objects.filter(customer__user__username=customer)
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]



class CartRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    def get_queryset(self):
        customer = self.kwargs.get('customer')  
        return Cart.objects.filter(customer__user__username=customer)
    serializer_class = CartUpdateSerializer
    lookup_field = 'product'
    permission_classes = [IsCartOwner]


"""
Order-Related views
"""
class OrderListCreateView(ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderCreateSingleView(APIView):
    serializer_class = OrderSerializer
    # permission_classes = [IsAuthenticated]
    
    def post(self, request, user, *args, **kwargs):
        customer = Customer.objects.get(user=user)
        serialized_data = SingleOrderSerializer(data=request.data) 
        serialized_data.is_valid(raise_exception=True)
        product = Product.objects.get(id=serialized_data.data.get('product'))
        quantity = float(serialized_data.data.get('quantity'))
        unit_price = float(product.price)
        gross_amount = unit_price * quantity

        discounts = Discount.objects.filter(products=product)
        product_discount = 0

        for d in discounts:
            if d.is_active and d.disc_type == Discount.PESO:
                product_discount += float(d.amount) * quantity
            elif d.is_active and d.disc_type == Discount.PERC:
                unit_discount = unit_price * float(d.amount)
                product_discount += unit_discount * quantity
        

        actual_discount = min(gross_amount, product_discount)
        total_amount = gross_amount - actual_discount


        order = Order.objects.create(user=customer, status=Order.UNPAID, total_amount = total_amount, gross_amount=gross_amount, discount=actual_discount)

        #create product line item
        OrderProduct.objects.create(
            order=order,
            product= product,
            quantity= quantity,
            unit_price = unit_price
        )

        serializer = OrderSerializer(order)
        return Response(serializer.data)      
    

class OrderProductListCreateView(ListCreateAPIView):
    def get_queryset(self):
        order = self.kwargs.get('order')  
        return OrderProduct.objects.filter(order=order)
    serializer_class = OrderProductSerializer
    permission_classes = [IsAuthenticated]



class OrderProductRetrieveView(RetrieveAPIView):
    queryset = OrderProduct.objects.all()
    serializer_class = OrderProductSerializer
    lookup_field = 'order'


"""
Computed Total views
"""
class OrderCreateView(APIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated, IsCartOwner]

    def post(self, request, user, *args, **kwargs):
        cart_items = Cart.objects.filter(customer__user_id=user)
        if not cart_items:
            return Response({'error': 'Cart is empty'}, status=status.HTTP_400_BAD_REQUEST)
        
        self.check_object_permissions(request, cart_items[0])
        customer = Customer.objects.get(user=user)

        order = Order.objects.create(user=customer, status=Order.UNPAID, )

        #to set order fields
        gross_amount = 0
        total_discounts = 0

        #iterating through each cart product
        for item in cart_items:
            product = item.product
            quantity = item.quantity
            unit_price = product.price

            #create product line item
            OrderProduct.objects.create(
                order=order,
                product= product,
                quantity= quantity,
                unit_price = unit_price
            )

            # compute for total product price
            product_price = unit_price * quantity

            # compute for total product discounts
            discounts = Discount.objects.filter(products=product)
            product_discount = 0

            for d in discounts:
                if d.is_active and d.disc_type == Discount.PESO:
                    product_discount += d.amount * quantity
                elif d.is_active and d.disc_type == Discount.PERC:
                    unit_discount = unit_price * d.amount
                    product_discount += unit_discount * quantity
            
            gross_amount += product_price
            total_discounts += min(product_discount, product_price)
        
        order.gross_amount = gross_amount
        order.discount = total_discounts
        order.total_amount = gross_amount - total_discounts
        order.save()
        print(order)

        serializer = OrderSerializer(order)
        return Response(serializer.data)      


class ComputedTotalView(APIView):
    def get(self, request,*args, **kwargs):
        #Get the user
        userId = self.kwargs.get('userId')
        user = CustomerSerializer(Customer.objects.filter(user_id=userId).first()).data

        #Get the cart
        cart = Cart.objects.filter(customer__user_id=userId)
        if not cart:
            return Response({'error': 'Cart is empty'}, status=status.HTTP_400_BAD_REQUEST)
        
        #Create new order


        order = cart.first().transfer_to_order()

        orderProducts = OrderProduct.objects.filter(order=order)
        serialized_orderProducts = OrderProductSerializer(orderProducts, many=True)

        serializedProduct = ProductSerializer(Product.objects.all())

        computed_order_products = []
        newprice = 0

        #Calculate the total with discount
        for order in serialized_orderProducts.data:
            discount = Discount.objects.filter(products=order["product"])
            serlializedDiscount = DiscountSerializer(discount, many = True)

            product = Product.objects.filter(id=order["product"])
            serlializedProduct = ProductSerializer(product, many = True)
            if len(serlializedDiscount.data) != 0:
                if(serlializedDiscount.data[0]['disc_type'] == "Percentage"):
                    newprice = (float(serlializedProduct.data[0]['price']) - float(serlializedProduct.data[0]['price']) * float(serlializedDiscount.data[0]['amount']))*float(order['quantity'])
                    print(float(serlializedDiscount.data[0]['amount']))
                    print(float(serlializedProduct.data[0]['price']))
                    print(newprice)
                else:
                    newprice = (float(serlializedProduct.data[0]['price']) - float(serlializedDiscount.data[0]['amount']))*float(order['quantity'])

            computed_order_products.append({"product": serlializedProduct.data[0]['name'], "total_price": newprice})
        
            # Calculate total price for the ordercts
        total_price = sum(item["total_price"] for item in computed_order_products)
        # Update the order with the total price
        print("TOTAL PRICE")
        print(total_price)
        Order.objects.filter(id=order['order']).update(total_amount=total_price)
        return Response(OrderSerializer(Order.objects.filter(id=order['order']),many = True).data, status=status.HTTP_200_OK)


"""
Report Views
"""
class ReportRetrieveView(APIView):
    
    def get(self, request,*args, **kwargs):
        category = self.request.query_params.get('cat', '')
        month = self.request.query_params.get('month', '')
        year = self.request.query_params.get('year', '')

        orders = Order.objects.filter(date_placed__year=year)

        if(category=='month'):
            orders = orders.filter(date_placed__month=month)
        
        order_count = len(orders)
        revenue = 0
        cost = 0

        for order in orders:
            if order.total_amount:
                revenue += order.total_amount

            order_line = OrderProduct.objects.filter(order=order)

            for line in order_line:
                cost += line.product.cost * line.quantity

        profit = revenue - cost

        return Response({"orders":order_count,"revenue":revenue,"profit":profit}, status=status.HTTP_200_OK)








"""
User Views
"""
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomerSerializer, UserCreatePasswordRetypeSerializer

class UserRegistrationAPIView(APIView):
    serializer_class = UserCreatePasswordRetypeSerializer

    def post(self, request, *args, **kwargs):
        user_serializer = UserCreatePasswordRetypeSerializer(data=request.data.get('user'))
        user_serializer.is_valid(raise_exception=True)
        user = user_serializer.save()

        # To create corresponding customer object related to user
        cust_data = {"user":user.id}
        cust_serializer = CustomerSerializer(data=cust_data)
        cust_serializer.is_valid(raise_exception=True)
        customer = cust_serializer.save()

        #To create cart data for the customer
        
        cart = request.data.get('cart', {})
        for k,v in cart.items():
            customer.products.add(k, through_defaults={'quantity':v})


        return Response(user_serializer.data, status=status.HTTP_201_CREATED)
        

class CustomerUpdateAPIView(UpdateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    lookup_field = 'pk'
    permission_classes = [IsOwnerOrReadOnly]











# class UserList(ListAPIView):
#     serializer_class = UserSerializer
#     queryset = User.objects.all()

#     def get_queryset(self):
#         # You can customize this method to filter users based on query parameters
#         username = self.request.query_params.get('username', None)
#         if username:
#             return User.objects.filter(username__icontains=username)
#         return User.objects.all()


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [permissions.AllowAny]

#     @action(detail=False, methods=['post'])
#     def login(self, request):
#         email = request.data.get('email')
#         password = request.data.get('password')

#         user = authenticate(request, username=email, password=password)

#         if user is not None:
#             login(request, user)
#             print('User is logged in')
#             return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
#         else:
#             return Response({'message': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)

#     @action(detail=False, methods=['post'])
#     def register(self, request):
#         email = request.data.get('email')
#         password = request.data.get('password')

#         if not email or not password:
#             return Response({'message': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

#         if User.objects.filter(username=email).exists():
#             return Response({'message': 'Email already registered'}, status=status.HTTP_400_BAD_REQUEST)

#         user = User.objects.create_user(username=email, password=password)

#         if user:
#             return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)
#         else:
#             return Response({'message': 'Registration failed'}, status=status.HTTP_400_BAD_REQUEST)