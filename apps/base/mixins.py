"""Mixins for Base App."""

from django.db import models
from django.utils.translation import gettext as _


class TimestampMixin(models.Model):
    """Mixin for models with creation and last update timestamp fields."""
    created_at = models.DateTimeField(_("Created at"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Updated at"), auto_now=True)

    class Meta:
        """Meta definition for TimestampMixin."""
        abstract = True
