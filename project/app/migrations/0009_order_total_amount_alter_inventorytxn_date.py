# Generated by Django 4.2.5 on 2023-11-29 11:30

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_alter_inventorytxn_date_alter_product_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='total_amount',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=20),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='inventorytxn',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2023, 11, 29, 11, 27, 1, 885151, tzinfo=datetime.timezone.utc)),
        ),
    ]