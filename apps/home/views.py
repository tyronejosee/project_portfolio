"""Views for Home App."""

from django.views.generic import TemplateView


class IndexTemplateView(TemplateView):
    """View for rendering the site index."""
    template_name = 'home/index.html'
