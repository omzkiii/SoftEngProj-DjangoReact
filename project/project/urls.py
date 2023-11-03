"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from app import views
from app.views import UserListView, ProductListView
#router = routers.DefaultRouter()
#router.register(r'users', views.UserView.as_view, 'app')

urlpatterns = [
    path('admin/', admin.site.urls),
    # #path('api/', include(router.urls)),
    # path('api/', UsersView.as_view()),
    # path('api/<str:username>', UserView.as_view()),
    path('api/users/', UserListView.as_view()),
    path('api/product/', ProductListView.as_view()),


]
