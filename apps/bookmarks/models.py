"""Models for Bookmarks App."""

from django.db import models
from django.utils.translation import gettext as _


class Bookmark(models.Model):
    """Entity type model for Bookmark."""
    name = models.CharField(max_length=100, verbose_name=_('Name'))
    description = models.TextField(blank=True, verbose_name=_('Description'))
    website = models.URLField(verbose_name=_('Website'))
    image = models.ImageField(upload_to='bookmarks/', verbose_name=_('Image'))
    status = models.BooleanField(default=True, verbose_name=_('Status'))

    class Meta:
        """Meta definition for Bookmark."""
        verbose_name = _("Bookmark")
        verbose_name_plural = _("Bookmarks")

    def __str__(self):
        return str(self.name)
