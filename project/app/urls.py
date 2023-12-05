from django.http import HttpResponse
from django.urls import path
from .views import ProductListView, ProductListCreateView, ProductUpdateView, ProductRetrieveView, CartRetrieveUpdateDestroyView, CartListCreateView, ProductCategoryListView, ProductSearchView
from .views import DiscountListView, DiscountCreateView, DiscountRetrieveUpdateDestroyView, OrderCreateSingleView, ReportRetrieveView
from .views import OrderProductListView, ComputeCart, OrderCreateView, OrderRetrieveUpdateView, OrderListView, UserOrderListView, OrderRetrieveView, ComputeCartAnon


urlpatterns = [

    # Product APIs
    path('products/', ProductListView.as_view(), name="products"),
    path('products/category/<str:category>', ProductCategoryListView.as_view(), name="products_category"),
    path('products/create', ProductListCreateView.as_view(), name="products_create"),
    path('products/update/<int:pk>', ProductUpdateView.as_view(), name="products_update"),
    path('products/<int:pk>', ProductRetrieveView.as_view(), name="products_detail"),
    path('products/search/', ProductSearchView.as_view(), name="products_detail"), #use http://localhost:8000/api/products/search/?q=${query}, example:http://localhost:8000/api/products/search/?q=apple


    # Discount APIs
    path('discounts/', DiscountListView.as_view(), name="discounts"),
    path('discounts/create', DiscountCreateView.as_view(), name="discounts"),
    path('discounts/<int:pk>', DiscountRetrieveUpdateDestroyView.as_view(), name="discount_detail"),
    

    #Cart APIs
    path('cart/<str:customer>', CartListCreateView.as_view(), name="cart"),
    path('cart/<str:customer>/<int:product>', CartRetrieveUpdateDestroyView.as_view(), name="cart_detail"),

    #Order APIs

    path('checkout/<int:user>', OrderCreateView.as_view(), name="checkout"),
    path('order/buynow/<int:user>', OrderCreateSingleView.as_view(), name="buynow"),

    path('order/', OrderListView.as_view(), name="order"),
    path('order/<int:pk>', OrderRetrieveUpdateView.as_view(), name="order_edit"),

    path('order/user/all/<int:user>', UserOrderListView.as_view(), name="user_order"),
    path('order/user/<int:pk>', OrderRetrieveView.as_view(), name="user_order_detail"),
    
    path('orderproducts/<int:order>', OrderProductListView.as_view(), name="order_product"),

    path('compute/<int:user>', ComputeCart.as_view(), name="compute"),
    path('compute/', ComputeCartAnon.as_view(), name="computeAnon"),



    #Report APIs
    path('report/', ReportRetrieveView.as_view(), name="report"), #report/?cat={cat}&month={month}&year={year}, example:http://127.0.0.1:8000/api/report/?cat=month&month=12&year=2023
    

]