from django.db import models
from django.forms import CharField


class User(models.Model):
    pass


class NewGoods(models.Model):
    photo = models.CharField(("Photo"), max_length=50)
    title = CharField()
    price = models.DecimalField()


class BestSellsGoods(models.Model):
    photo = models.CharField(("Photo"), max_length=50)
    title = CharField()
    price = models.DecimalField()