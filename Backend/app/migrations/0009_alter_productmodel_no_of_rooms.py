# Generated by Django 4.2 on 2023-04-12 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_alter_productmodel_brand_alter_productmodel_fuel_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productmodel',
            name='no_of_rooms',
            field=models.PositiveSmallIntegerField(blank=True, null=True),
        ),
    ]
