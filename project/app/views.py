from rest_framework import viewsets, status, permissions
from rest_framework.generics import CreateAPIView, ListCreateAPIView, ListAPIView
from .serializers import ProductSerializer, UserSerializer
from .models import Product
from django.contrib.auth.models import User

from rest_framework.response import Response
from django.contrib.auth import login, authenticate
from rest_framework.decorators import action




# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    @action(detail=False, methods=['post'])
    def login(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)

    @action(detail=False, methods=['post'])
    def register(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({'message': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=email).exists():
            return Response({'message': 'Email already registered'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=email, password=password)

        if user:
            return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'Registration failed'}, status=status.HTTP_400_BAD_REQUEST)

class UserList(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        # You can customize this method to filter users based on query parameters
        username = self.request.query_params.get('username', None)
        if username:
            return User.objects.filter(username__icontains=username)
        return User.objects.all()

    
class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer