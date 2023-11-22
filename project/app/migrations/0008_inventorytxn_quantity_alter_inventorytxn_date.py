# Generated by Django 4.2.5 on 2023-11-22 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_order_orderproduct_order_product_order_user_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='inventorytxn',
            name='quantity',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=20),
        ),
        migrations.AlterField(
            model_name='inventorytxn',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]