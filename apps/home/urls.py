"""URL configuration for core project."""

from django.urls import path

from apps.home.views import IndexTemplateView

urlpatterns = [
    path("", IndexTemplateView.as_view(), name="index_view"),
]
