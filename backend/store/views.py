from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Products
from .serializers import ProductSerializer

class ProductList(APIView):
  def get(self, request, category=None):
    if category:
      products = Products.objects.filter(category__iexact=category) #TODO: explain this line of code
    else:
      products = Products.objects.all()
      
    serializer = ProductSerializer(products, many=True)

    return Response(serializer.data)
  