from django.urls import path

from . import views

urlpatterns = [
    path('address/', views.AddressView.as_view(), name='address'),
    path('profile', views.UserProfileView.as_view(), name='profile'),
    path('register/', views.UserRegisterView.as_view(), name='register')
]