from django.db import models
from base.models import BaseUser


LOCATIONS = (("MARGAO","MARGAO"), ("PANJIM","PANJIM"), ("MARGAO","MARGAO"),("MARGAO","MARGAO"), ("MARGAO","MARGAO"), ("MARGAO","MARGAO"))


class UserModel(BaseUser):
    profile_pic = models.ImageField(upload_to="profile", height_field=None, width_field=None, max_length=None, null=True, blank=True)
    profile_pic_url = models.URLField(max_length=200, null=True, blank=True)
    phone = models.CharField(max_length=13, null=True, blank=True)
    is_verified = models.BooleanField(default=False)
    def __str__(self):
        return self.name
    class Meta:
        db_table = 'user'
