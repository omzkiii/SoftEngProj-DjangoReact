from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from app.views import UserRegistrationAPIView


# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet.as_view, 'app')
# router = routers.DefaultRouter()
# router.register(r'users', UserViewSet)


urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),

    # Main API
    path('api/', include('app.urls')),

    # User Registration API
    # Request body format should be:
    #    {
    #        "user": {"username": "", "email": "", "first_name": "", "last_name": "", "password": "", "re_password": ""},
    #        "cart": {"{product_id}": quantity, "10": 7}
    #    }
    #
    path('register/', UserRegistrationAPIView.as_view()),
    
    # User Authentication API
    # auth/token/login/ - for logging in
    # auth/token/logout/ - for logging out
    # auth/users/me/ - for retrieving, updating and deleting user data
    # auth/users/reset_password/ - for sending reset link to user email
    # auth/users/reset_password_confirm/ - for changing user password
    # https://djoser.readthedocs.io/en/latest/base_endpoints.html#
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    # path('api/', include(router.urls)),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #for accessing uploaded images
