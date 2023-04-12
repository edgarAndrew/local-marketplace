from rest_framework.generics import CreateAPIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.core.paginator import Paginator
from base.utils import paginate
from .serializers import *
from .threads import *
from .models import *
from django.core.cache import cache

from django.db.models.signals import pre_save
from django.dispatch import receiver


class ContactUs(CreateAPIView):
    queryset = ContactUsModel.objects.all().order_by("-created_at")
    serializer_class = ContactSerializer



@receiver(pre_save, sender=ContactUsModel)
def send_email(sender, instance, *args, **kwargs):
    try:
        thread_obj = send_contact_email()
        thread_obj.start()
    except Exception as e:
        print(e)