from rest_framework import serializers
from .models import *


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUsModel
        exclude = ["updated_at"]

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = ["name", "img"]

class ProductImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImagesModel
        fields = ["id", "img"]

class MultiProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductModel
        fields = ["title", "price", "img"]

class ProductSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    class Meta:
        model = ProductModel
        exclude = ["updated_at"]
    def get_images(self, obj):
        images_array = []
        try:
            prod_obj = ProductModel.objects.get(id = obj.id)
            serializer = ProductImagesSerializer(prod_obj.product_images.all(), many=True)
            images_array = serializer.data
        except Exception as e:
            print(e)
        return images_array
