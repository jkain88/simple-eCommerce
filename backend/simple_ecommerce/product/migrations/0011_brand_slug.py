# Generated by Django 4.1 on 2024-01-19 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0010_brand_product_brand'),
    ]

    operations = [
        migrations.AddField(
            model_name='brand',
            name='slug',
            field=models.SlugField(max_length=100, null=True, unique=True),
        ),
    ]
