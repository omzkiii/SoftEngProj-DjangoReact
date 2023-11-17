from django.http import HttpResponse
from django.urls import path
from .views import ProductListView, ProductListCreateView, ProductUpdateView, ProductRetrieveView
from .views import DiscountListCreateView, DiscountRetrieveView


urlpatterns = [

    # Product APIs
    path('products/', ProductListView.as_view(), name="products"),
    path('products/create', ProductListCreateView.as_view(), name="products_create"),
    path('products/update/<int:pk>', ProductUpdateView.as_view(), name="products_update"),
    path('products/<int:pk>', ProductRetrieveView.as_view(), name="products_detail"),

    # Discount APIs
    path('discounts/', DiscountListCreateView.as_view(), name="discounts"),
    path('discounts/<int:pk>', DiscountRetrieveView.as_view(), name="discount_detail"),
]