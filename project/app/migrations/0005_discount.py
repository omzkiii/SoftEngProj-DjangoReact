# Generated by Django 4.2.5 on 2023-11-17 02:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_customer_product_cost_product_date_created_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Discount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=255)),
                ('disc_type', models.CharField(choices=[('Peso', 'Peso'), ('Percentage', 'Percentage')], max_length=50)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('is_active', models.BooleanField(default=True)),
                ('products', models.ManyToManyField(to='app.product')),
            ],
        ),
    ]
