from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import UserSerializer
from .models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from django.views import View
# Create your views here.

#class UserView(viewsets.ModelViewSet):
class UserView(APIView):
    #'''serializer_class = UserSerializer
    #queryset = User.objects.all()'''

    def get(self, request, username):
            user = User.objects.get(username = username)
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
class UsersView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class Hello(View):
    def get(self, request):
        return HttpResponse("<html><body><form><h1>HELLO WORLD</h1><input type=\"text\ id=\"text\" ><input type=Submit></form></body></html>")