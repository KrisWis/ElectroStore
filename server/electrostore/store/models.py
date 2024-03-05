from django.db import models
from django.forms import CharField


class User(models.Model):
    pass


class NewGoods(models.Model):
    photo = models.CharField(("Photo"))
    title = CharField(max_length=60)
    price = models.DecimalField()


class BestSellsGoods(models.Model):
    photo = models.CharField(("Photo"))
    title = CharField(max_length=60)
    price = models.DecimalField()