from django.db import models
from django.contrib.auth import models as md

# Create your models here.

class Customer(md.User):
    pass

    
class Product(models.Model):
    fruit = "Fruit"
    vegetable = "Vegetable"

    CATEGORY = [
        (fruit, fruit)
        (vegetable, vegetable)
    ]


    name = models.CharField(max_length=255)
    description = models.TextField()
    unit = models.CharField(max_length=255)
    quantity = models.DecimalField(max_digits=20, decimal_places=2) 
    price = models.DecimalField(max_digits=20, decimal_places=2) #per unit
    cost = models.DecimalField(max_digits=20, decimal_places=2) #per unit
    category = models.CharField(max_length=100, choices=CATEGORY)
    image = models.ImageField(upload_to="products/")
    date_created = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name
    

class Order(models.Model):
    pass