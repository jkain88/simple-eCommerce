# Generated by Django 4.1 on 2024-01-19 05:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0005_remove_checkout_total_amount_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='checkout',
            name='billing_address',
        ),
    ]