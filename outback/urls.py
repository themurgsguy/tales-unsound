from django.urls import path

from . import views

app_name = 'outback'
urlpatterns = [
    path('', views.OutbackView.as_view()),
    path('place/<int:place_id>', views.PlaceView.as_view(), name='place')
]
