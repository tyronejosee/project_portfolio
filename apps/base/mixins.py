"""Mixins for Base App."""

from django.db import models
from django.utils.translation import gettext as _


class TimestampMixin(models.Model):
    """Mixin for models with creation and last update timestamp fields."""
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('Created at'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('Updated at'))

    class Meta:
        """Meta definition for TimestampMixin."""
        abstract = True
