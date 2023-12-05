from django.db import models
from django.contrib.auth.models import User

#############################################
class Product(models.Model):
    FRUIT = "fruit"
    VEGETABLE = "vegetable"

    CATEGORY = [
        (FRUIT, FRUIT),
        (VEGETABLE, VEGETABLE)
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
    is_available = models.BooleanField(default=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"{self.name} - {self.category}"
    
#############################################

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    contact_no = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    products = models.ManyToManyField(Product, through="Cart")

    def __str__(self) -> str:
        return self.user.username

#############################################    

class Cart(models.Model):
    class Meta:
        unique_together = (('customer', 'product'),)

    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.DecimalField(max_digits=20, decimal_places=2)

    def __str__(self) -> str:
        return f"{self.customer.user.username}'s Cart"

#############################################

class Discount(models.Model):
    PESO = "Peso"
    PERC = "Percentage"

    DISC_TYPE = [
        (PESO, PESO),
        (PERC, PERC)
    ]

    products = models.ManyToManyField(Product)
    description = models.CharField(max_length=255)
    disc_type = models.CharField(max_length=50, choices=DISC_TYPE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.description


#############################################

class InventoryTxn(models.Model):
    ADD = "Addition"
    SALE = "Sale"
    OTHERS = "Others"

    TXN_TYPE = [
        (ADD, ADD),
        (SALE, SALE),
        (OTHERS, OTHERS)
    ]
    
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    date = models.DateTimeField(auto_now_add=True)
    txn_type = models.CharField(max_length=10, choices=TXN_TYPE)
    quantity = models.DecimalField(max_digits=20, decimal_places=2, default=0)

#############################################

#TODO: Change on_delete to SET() and set to deleted customer (create user and customer for deleted accounts)
class Order(models.Model):
    UNPAID = "Unpaid"
    PAID = "Paid"
    PACKED = "Packed"
    IN_TRANSIT = "In Transit"
    COMPLETED = "Completed"

    STATUS = [
        (UNPAID, UNPAID),
        (PAID, PAID),
        (PACKED, PACKED),
        (IN_TRANSIT, IN_TRANSIT),
        (COMPLETED, COMPLETED)
    ]

    
    user = models.ForeignKey(Customer, on_delete=models.DO_NOTHING)
    product = models.ManyToManyField(Product, through="OrderProduct")
    date_placed = models.DateTimeField(auto_now_add=True)
    date_completed = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=15, choices=STATUS)
    total_amount = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    gross_amount = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    discount = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)


#############################################

class OrderProduct(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.DecimalField(max_digits=20, decimal_places=2)
    unit_price = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)