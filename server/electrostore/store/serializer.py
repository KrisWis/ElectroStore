from rest_framework.serializers import ModelSerializer
from .models import NewGoods, BestSellsGoods

class OrderSerializer(ModelSerializer):
    class Meta:
        model = NewGoods
        fields = '__all__'