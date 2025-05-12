from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Products
from .serializers import ProductSerializer

class ProductList(APIView):
  def get(self, request, category=None):
    if category:
      products = Products.objects.filter(category__iexact=category)
    else:
      products = Products.objects.all()
      
    serializer = ProductSerializer(products, many=True, context={'request': request})

    return Response(serializer.data)
  