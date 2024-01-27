# Generated by Django 4.1 on 2024-01-27 09:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0001_initial'),
        ('order', '0002_alter_orderline_product_and_more'),
        ('payment', '0002_remove_payment_currency'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='checkout',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='payment', to='checkout.checkout'),
        ),
        migrations.AlterField(
            model_name='payment',
            name='order',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='payment', to='order.order'),
        ),
    ]
