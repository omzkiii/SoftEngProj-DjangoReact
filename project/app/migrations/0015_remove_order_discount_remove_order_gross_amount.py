# Generated by Django 4.2.5 on 2023-11-30 08:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_merge_20231130_0805'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='discount',
        ),
        migrations.RemoveField(
            model_name='order',
            name='gross_amount',
        ),
    ]
