from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import BestSellsGoods, NewGoods
from .serializer import OrderSerializer


def index_page(request):
    return render(request, 'index.html')


class OurNewArrivalsView(ModelViewSet):
    queryset = NewGoods.objects.all()
    serializer_class = OrderSerializer