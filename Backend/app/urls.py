from django.urls import path
from . import views
from .views import *


urlpatterns = [
    path('contact/', views.ContactUs.as_view(), name="contact"),
    path('get-categories/', views.GetCategories.as_view(), name="get-categories"),
    path('get-products/', views.get_products, name="get-products"),
]
