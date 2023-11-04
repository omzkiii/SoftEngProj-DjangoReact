from django.contrib import admin
from .models import Product

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'name')

# Register your models here.
admin.site.register(Product)