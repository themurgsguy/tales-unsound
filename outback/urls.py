from django.urls import path

from . import views

app_name = 'outback'
urlpatterns = [
    path('', views.outback, name='outback'),
]
