"""URL configuration for core project."""

from django.urls import path

from apps.home.views import IndexTemplateView

app_name = 'home'

urlpatterns = [
    path("", IndexTemplateView.as_view(), name="index"),
]
