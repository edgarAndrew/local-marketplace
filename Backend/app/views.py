from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.core.paginator import Paginator
from django.db.models import Q
from base.utils import paginate
from .serializers import *
from .threads import *
from .models import *


class ContactUs(CreateAPIView):
    queryset = ContactUsModel.objects.all().order_by("-created_at")
    serializer_class = ContactSerializer


class GetCategories(ListAPIView):
    queryset = CategoryModel.objects.all()
    serializer_class = CategoriesSerializer


@api_view(["GET"])
def get_products(request):
    try:
        queryset = ProductModel.objects.filter(is_sold=False).order_by("-created_at")
        # Filter by Name
        prod_name = request.query_params.get('search_product')
        if not prod_name:
            objs = queryset
        else:
            objs = ProductModel.objects.filter(
                Q(title__icontains=prod_name) or 
                Q(description__icontains=prod_name), 
                is_sold = False
            ).order_by("-created_at")
        # Filter by Category
        cat_id = request.query_params.get('category_filter')
        if not cat_id:
            objs = objs
        else:
            cat = CategoryModel.objects.get(id=cat_id)
            objs = ProductModel.objects.filter(category=cat, is_sold=False).order_by("-created_at")
        # Filter by Location
        loc = request.query_params.get('location_filter')
        if not loc:
            objs = objs
        else:
            objs = ProductModel.objects.filter(location=loc, is_sold=False).order_by("-created_at")
        page = request.GET.get("page", 1)
        paginator = Paginator(objs, 9)
        data = paginate(objs, paginator, page)
        ser = MultiProductSerializer(data["results"], many=True)
        data["results"] = ser.data
        ser = MultiProductSerializer(objs, many=True)
        return Response(data, status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class GetSingleProduct(RetrieveAPIView):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "id"


@permission_classes([IsAuthenticated])
@api_view(["POST"])
def AddProductView(request):
    try:
        user = UserModel.objects.get(email=request.user.email)
        ser = AddProductSerializer(data=request.data)
        if ser.is_valid():
            ser.save(owner=user)
            return Response({"message":"Product Added"}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(e)
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@permission_classes([IsAuthenticated])
@api_view(["POST"])
def add_product_image(request, prod_id):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not ProductModel.objects.filter(id=prod_id).exists():
            return Response({"message": "Invalid Product ID"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        prod = ProductModel.objects.get(id=prod_id)
        if prod.owner != user:
            return Response({"message":"You dont have rights to edit this product details"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        ser = ProdImgSer(data=request.data)
        ser.save(product=prod)
        return Response({"message":"Inage Added"}, status=status.HTTP_202_ACCEPTED)
    except Exception as e:
        print(e)
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@permission_classes([IsAuthenticated])
@api_view(["POST"])
def add_product_image(request, prod_id):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not ProductModel.objects.filter(id=prod_id).exists():
            return Response({"message": "Invalid Product ID"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        prod = ProductModel.objects.get(id=prod_id)
        if prod.owner != user:
            return Response({"message":"You dont have rights to edit this product details"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        ser = ProdImgSer(data=request.data)
        if ser.is_valid():
            ser.save(product=prod)
            return Response({"message":"Image Added"}, status=status.HTTP_202_ACCEPTED)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(e)
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@permission_classes([IsAuthenticated])
@api_view(["DELETE"])
def delete_product_image(request, id):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not ProductImagesModel.objects.filter(id=id).exists():
            return Response({"message": "Invalid Product Image ID"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        prod_img = ProductImagesModel.objects.get(id=id)
        if prod_img.product.owner != user:
            return Response({"message":"You dont have rights to edit this product details"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        prod_img.delete()
        return Response({"message": "Product Image Deleted"}, status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@permission_classes([IsAuthenticated])
@api_view(["GET"])
def get_user_data(request):
    try:
        user = UserModel.objects.get(email=request.user.email)
        s1 = CustomerNameSerializer(user)
        s2 = MultiProductSerializer(user.product_owner.all(), many=True)
        return Response({"user":s1.data, "products":s2.data}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@permission_classes([IsAuthenticated])
@api_view(["DELETE"])
def ad_is_sold(request, prod_id):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not ProductModel.objects.filter(id=prod_id).exists():
            return Response({"message": "Invalid Product ID"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        prod = ProductModel.objects.get(id=prod_id)
        if prod.owner != user:
            return Response({"message":"You dont have rights to edit this product details"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        prod.is_sold = True
        prod.save()
        return Response({"message":"Ad is SOLD"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
