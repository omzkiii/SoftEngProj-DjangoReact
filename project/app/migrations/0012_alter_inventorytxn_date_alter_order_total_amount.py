# Generated by Django 4.2.5 on 2023-11-29 12:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_alter_inventorytxn_date_alter_order_date_completed'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventorytxn',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2023, 11, 29, 12, 54, 19, 409911, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='order',
            name='total_amount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True),
        ),
    ]
