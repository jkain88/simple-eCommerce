# Generated by Django 4.1 on 2024-02-16 15:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='checkoutline',
            name='checkout',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lines', to='checkout.checkout'),
        ),
    ]
