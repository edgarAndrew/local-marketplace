from django.contrib import admin
from .models import *

admin.site.register(ContactUsModel)

admin.site.register(CategoryModel)

class ProductImagesModelAdmin(admin.StackedInline):
    model = ProductImagesModel
class ProductModelAdmin(admin.ModelAdmin):
    inlines = [ ProductImagesModelAdmin ]
    list_display = ["title", "price"]

admin.site.register(ProductModel, ProductModelAdmin)
