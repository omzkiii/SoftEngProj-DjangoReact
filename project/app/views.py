from requests import Response
from rest_framework.generics import ListAPIView, ListCreateAPIView, UpdateAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.views import APIView
from .serializers import ProductSerializer, ProductUpdateSerializer, DiscountSerializer, CartSerializer, OrderSerializer, OrderProductSerializer
from .models import Product, Discount, InventoryTxn, Cart, Order, OrderProduct, Customer
from rest_framework.permissions import IsAdminUser
from rest_framework import permissions
from django.db.models import Q

"""Custom permission"""
class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Instance must have an attribute named `owner`.
        return obj.user == request.user
    
class IsCustomerOrReadOnly(permissions.BasePermission):
    
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Instance must have an attribute named `owner`.
        return obj.customer == request.user



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

class DiscountRetrieveView(RetrieveAPIView):
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
    permission_classes = [IsCustomerOrReadOnly]



class CartRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    def get_queryset(self):
        customer = self.kwargs.get('customer')  
        return Cart.objects.filter(customer__user__username=customer)
    serializer_class = CartSerializer
    lookup_field = 'pk'

"""
Order-Related views
"""
class OrderListCreateView(ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    

class OrderProductListCreateView(ListCreateAPIView):
    def get_queryset(self):
        order = self.kwargs.get('order')  
        return OrderProduct.objects.filter(order=order)
    serializer_class = OrderProductSerializer

class OrderProductRetrieveView(RetrieveAPIView):
    queryset = OrderProduct.objects.all()
    serializer_class = OrderProductSerializer
    lookup_field = 'order'

"""
Computed Total views
"""
class ComputedTotalView(APIView):
    def get(self, request,*args, **kwargs):
        orderId = self.kwargs.get('orderId')
        orderProduct = OrderProduct.objects.filter(order = orderId)
        serialized_orderProduct = OrderProductSerializer(orderProduct, many = True)
        products = Product.objects.all()
        computed_order_products = []
        newprice = 0
        for order in serialized_orderProduct.data:
            discount = Discount.objects.filter(products=order["product"])
            serlializedDiscount = DiscountSerializer(discount, many = True)

            product = Product.objects.filter(id=order["product"])
            serlializedProduct = ProductSerializer(product, many = True)
            if len(serlializedDiscount.data) != 0:
                if(serlializedDiscount.data[0]['disc_type'] == "Percentage"):
                    newprice = (float(serlializedProduct.data[0]['price']) - float(serlializedProduct.data[0]['price']) * float(serlializedDiscount.data[0]['amount']))*float(order['quantity'])
                    
                    #newprice = float(serlializedProduct.data[0]['price']) - float(serlializedProduct.data[0]['price']) * float(serlializedDiscount.data[0]['amount'])
                    print(float(serlializedDiscount.data[0]['amount']))
                    print(float(serlializedProduct.data[0]['price']))
                    print(newprice)
                else:
                    newprice = (float(serlializedProduct.data[0]['price']) - float(serlializedDiscount.data[0]['amount']))*float(order['quantity'])

            computed_order_products.append({"product": serlializedProduct.data[0]['name'], "total price": newprice})


        return Response(computed_order_products, status=status.HTTP_200_OK)




"""
User Registration View
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