from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import BestSellsGoods, NewGoods
from .serializer import OrderSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView


def index_page(request):
    return render(request, 'index.html')


class OurNewArrivalsView(ModelViewSet):
    queryset = NewGoods.objects.all()
    serializer_class = OrderSerializer
    http_method_names = ['get']