"""Mixins for Base App."""

from django.db import models


class TimestampMixin(models.Model):
    """Mixin for models with creation and last update timestamp fields."""
    created_at = models.DateTimeField('Created at', auto_now_add=True)
    updated_at = models.DateTimeField('Updated at', auto_now=True)

    class Meta:
        """Meta definition for TimestampMixin."""
        abstract = True
