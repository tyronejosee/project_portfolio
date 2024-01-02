"""Views for Base App."""

from django.views.generic import TemplateView


class LandingTemplateView(TemplateView):
    """View for rendering the site landing."""
    template_name = 'base/landing.html'
