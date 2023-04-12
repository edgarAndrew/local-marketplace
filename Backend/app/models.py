from django.db import models
from base.models import BaseModel
from authentication.models import UserModel


class CategoryModel(BaseModel):
    name = models.CharField(max_length=50)
    img = models.ImageField(upload_to="category", height_field=None, width_field=None, max_length=None)
    def __str__(self):
        return self.name
    class Meta:
        db_table = 'category'


class ProductModel(BaseModel):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    is_sold = models.BooleanField(default=False)
    price = models.PositiveIntegerField(default=0)
    owner = models.ForeignKey(UserModel, related_name="product_owner", on_delete=models.CASCADE)
    def __str__(self):
        return self.title
    class Meta:
        db_table = 'product'


class ContactUsModel(BaseModel):
    name = models.CharField(max_length = 100)
    email = models.EmailField(max_length = 100)
    msg = models.TextField()
    def __str__(self):
        return self.name
    class Meta:
        db_table = 'contact'