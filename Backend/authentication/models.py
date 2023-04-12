from django.db import models
from base.models import BaseUser


class UserModel(BaseUser):
    def __str__(self):
        return self.name
