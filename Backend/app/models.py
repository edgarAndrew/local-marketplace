from django.db import models
from base.models import BaseModel
from authentication.models import UserModel
from django.db.models.signals import pre_save
from django.dispatch import receiver
from .threads import send_contact_email

BRAND = (("APPLE","APPLE"), ("SAMSUNG","SAMSUNG"), ("ONEPLUS","ONEPLUS"), ("REALME","REALME"), ("NOKIA","NOKIA"), ("MOTOROLLA","MOTOROLLA"))

FUEL = (("PETROL","PETROL"), ("DIESEL","DIESEL"), ("CNG","CNG"), ("OTHERS","OTHERS"))

TRANSMISSION = (("MANNUAL","MANNUAL"), ("AUTO","AUTO"))

PROPERTIES = (("APPARTMENT","APPARTMENT"), ("BUNGLOW","BUNGLOW"), ("FARMHOUSE","FARMHOUSE"))

LOCATIONS = (("MARGAO","MARGAO"), ("PANJIM","PANJIM"), ("VASCO","VASCO"),("MAPUSA","MAPUSA"), ("PONDA","PONDA"), ("VALPOI","VALPOI"))


class ContactUsModel(BaseModel):
    name = models.CharField(max_length = 100)
    email = models.EmailField(max_length = 100)
    message = models.TextField()
    def __str__(self):
        return self.name
    class Meta:
        db_table = 'contact'


class CategoryModel(BaseModel):
    name = models.CharField(max_length=50)
    img = models.ImageField(upload_to="category", height_field=None, width_field=None, max_length=None)
    def __str__(self):
        return self.name
    class Meta:
        db_table = 'category'


class ProductModel(BaseModel):
    title = models.CharField(max_length=50)
    description = models.TextField()
    category = models.ForeignKey(CategoryModel, related_name="product_category", on_delete=models.CASCADE)
    price = models.PositiveIntegerField(default=0)
    location = models.CharField(choices=LOCATIONS, default=LOCATIONS[0], max_length=50)
    img = models.ImageField(upload_to="product", height_field=None, width_field=None, max_length=None)
    owner = models.ForeignKey(UserModel, related_name="product_owner", on_delete=models.CASCADE, null=True, blank=True)
    is_sold = models.BooleanField(default=False)
    brand = models.CharField(choices=BRAND, max_length=50, null=True, blank=True)
    date_of_purchase = models.DateField(auto_now=False, auto_now_add=False)
    fuel = models.CharField(choices=FUEL, max_length=50, null=True, blank=True)
    km_driven = models.PositiveIntegerField(null=True, blank=True)
    transmission_type = models.CharField(choices=TRANSMISSION, max_length=50, null=True, blank=True)
    property_type = models.CharField(choices=PROPERTIES, max_length=50, null=True, blank=True)
    no_of_rooms = models.PositiveSmallIntegerField(null=True, blank=True)
    is_furnished = models.BooleanField(null=True, blank=True)
    carpet_area = models.FloatField(null=True, blank=True)
    is_parking_available = models.BooleanField(null=True, blank=True)
    facilities = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.title
    class Meta:
        db_table = 'product'


class ProductImagesModel(BaseModel):
    product = models.ForeignKey(ProductModel, related_name="related_images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="related_images", height_field=None, width_field=None, max_length=None)
    class Meta:
        db_table = 'product-images'


@receiver(pre_save, sender=ContactUsModel)
def send_email(sender, instance, *args, **kwargs):
    try:
        thread_obj = send_contact_email(instance.email)
        thread_obj.start()
    except Exception as e:
        print(e)

