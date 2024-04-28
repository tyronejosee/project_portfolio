"""URLs for Base App."""

from django.urls import path
from apps.base.views import LandingTemplateView

app_name = "home"

urlpatterns = [
    path("", LandingTemplateView.as_view(), name="landing_view"),
]
