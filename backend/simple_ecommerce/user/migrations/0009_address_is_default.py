# Generated by Django 4.1 on 2024-01-17 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0008_address_contact_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='is_default',
            field=models.BooleanField(default=False),
        ),
    ]
