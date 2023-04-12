from authentication.serializers import CustomerNameSerializer
from rest_framework import serializers
from .models import *


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUsModel
        exclude = ["updated_at"]

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = ["id", "name", "img"]

class ProductImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImagesModel
        fields = ["id", "image"]


class ProdImgSer(serializers.ModelSerializer):
    class Meta:
        model = ProductImagesModel
        fields = ["image"]


class MultiProductSerializer(serializers.ModelSerializer):
    owner = CustomerNameSerializer()
    class Meta:
        model = ProductModel
        fields = ["id", "title", "price", "img", "owner"]

class ProductSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    owner = CustomerNameSerializer()
    class Meta:
        model = ProductModel
        exclude = ["updated_at"]
    def get_images(self, obj):
        images_array = []
        try:
            prod_obj = ProductModel.objects.get(id = obj.id)
            ser = ProductImagesSerializer(prod_obj.related_images.all(), many=True)
            images_array = ser.data
            print(images_array)
        except Exception as e:
            print(e)
        return images_array


class AddProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductModel
        exclude = ["created_at", "updated_at", "is_sold", "owner"]
