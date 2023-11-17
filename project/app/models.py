from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    fruit = "Fruit"
    vegetable = "Vegetable"

    CATEGORY = [
        (fruit, fruit),
        (vegetable, vegetable)
    ]


    name = models.CharField(max_length=50)
    description = models.TextField()
    unit = models.CharField(max_length=50)
    quantity = models.DecimalField(max_digits=20, decimal_places=2, default=0) 
    price = models.DecimalField(max_digits=20, decimal_places=2) #per unit
    cost = models.DecimalField(max_digits=20, decimal_places=2, default=0) #per unit
    category = models.CharField(max_length=50, choices=CATEGORY)
    image = models.ImageField(upload_to="products", null=True)
    is_featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"{self.name} - {self.category}"
    

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    contact_no = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    products = models.ManyToManyField(Product, through="Cart")

    def __str__(self) -> str:
        return self.user.username
    

class Cart(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.DecimalField(max_digits=20, decimal_places=2)


class Discount(models.Model):
    peso = "Peso"
    perc = "Percentage"

    DISC_TYPE = [
        (peso, peso),
        (perc, perc)
    ]

    products = models.ManyToManyField(Product)
    description = models.CharField(max_length=255)
    disc_type = models.CharField(max_length=50, choices=DISC_TYPE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)
