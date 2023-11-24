from django.contrib import admin
from .models import Product, Cart, Order, OrderProduct

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'name')

# Register your models here.
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Order)
admin.site.register(OrderProduct)