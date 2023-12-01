from django.http import HttpResponse
from django.urls import path
from .views import ProductListView, ProductListCreateView, ProductUpdateView, ProductRetrieveView, CartRetrieveUpdateDestroyView, CartListCreateView, ProductCategoryListView, ProductSearchView
from .views import DiscountListCreateView, DiscountRetrieveUpdateDestroyView, OrderCreateSingleView, ReportRetrieveView
from .views import OrderProductListCreateView, ComputedTotalView, OrderCreateView, OrderListCreateView


urlpatterns = [

    # Product APIs
    path('products/', ProductListView.as_view(), name="products"),
    path('products/category/<str:category>', ProductCategoryListView.as_view(), name="products_category"),
    path('products/create', ProductListCreateView.as_view(), name="products_create"),
    path('products/update/<int:pk>', ProductUpdateView.as_view(), name="products_update"),
    path('products/<int:pk>', ProductRetrieveView.as_view(), name="products_detail"),
    path('products/search/', ProductSearchView.as_view(), name="products_detail"), #use http://localhost:8000/api/products/search/?q=${query}, example:http://localhost:8000/api/products/search/?q=apple


    # Discount APIs
    path('discounts/', DiscountListCreateView.as_view(), name="discounts"),
    path('discounts/<int:pk>', DiscountRetrieveUpdateDestroyView.as_view(), name="discount_detail"),
    

    #Cart APIs
    path('cart/<str:customer>', CartListCreateView.as_view(), name="cart"),
    path('cart/<str:customer>/<int:product>', CartRetrieveUpdateDestroyView.as_view(), name="cart_detail"),

    #Order APIs
    #To get line items in an order
    path('orderproducts/<int:order>', OrderProductListCreateView.as_view(), name="order_product"),
    path('checkout/<int:user>', OrderCreateView.as_view(), name="checkout"),
    path('order/buynow/<int:user>', OrderCreateSingleView.as_view(), name="buynow"),

    #TODO: for deletion    
    path('compute/<int:userId>', ComputedTotalView.as_view(), name="compute"),

    #Report APIs
   path('report/', ReportRetrieveView.as_view(), name="report"), #report/?cat={cat}&month={month}&year={year}, example:http://localhost:8000/api/products/search/?q=apple
    

]