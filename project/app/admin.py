from django.contrib import admin
from .models import User, Product

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'name')

# Register your models here.

admin.site.register(User, UserAdmin)
admin.site.register(Product)