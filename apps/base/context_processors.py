"""Context Processors for Base App."""

from apps.base.models import Portfolio


def portfolio_context(_request):
    """Context processor for all data from the Portfolio model."""
    portfolio = Portfolio.objects.first()
    return {"portfolio": portfolio}
