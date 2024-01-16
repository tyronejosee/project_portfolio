"""Context Processors for Base App."""

from apps.base.models import Portfolio
from apps.base.forms import ThemePreferenceForm


def portfolio_context(_request):
    """Context processor for all data from the Portfolio model."""
    portfolio = Portfolio.objects.first()
    return {"portfolio": portfolio}


def user_preferences(request):
    """Context processor to send the theme preference and theme form."""
    theme_preference = request.session.get('theme_preference', 'dark')
    theme_form = ThemePreferenceForm(initial={'theme_preference': theme_preference})
    return {'theme_preference': theme_preference, 'theme_form': theme_form}
