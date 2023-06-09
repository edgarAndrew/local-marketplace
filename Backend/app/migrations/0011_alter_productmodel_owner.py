# Generated by Django 4.2 on 2023-04-12 11:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0005_alter_usermodel_phone'),
        ('app', '0010_alter_productmodel_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productmodel',
            name='owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_owner', to='authentication.usermodel'),
        ),
    ]
