from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=120)
    name = models.CharField(max_length=120)

    def _str_(self):
        return self.title
