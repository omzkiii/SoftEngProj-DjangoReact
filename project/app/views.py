from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.generics import CreateAPIView, ListCreateAPIView, ListAPIView
from .serializers import UserSerializer, ProductSerializer
from .models import User, Product
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from django.views import View
# Create your views here.

#class UserView(viewsets.ModelViewSet):
# class UserView(APIView):
#     #'''serializer_class = UserSerializer
#     #queryset = User.objects.all()'''

#     def get(self, request, username):
#             user = User.objects.get(username = username)
#             serializer = UserSerializer(user)
#             return Response(serializer.data, status=status.HTTP_200_OK)
    
# class UsersView(APIView):
#     def get(self, request):
#         users = User.objects.all()
#         serializer = UserSerializer(users, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer