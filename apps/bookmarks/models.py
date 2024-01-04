"""Models for Bookmarks App."""

from django.db import models
from django.utils.translation import gettext as _


class Bookmark(models.Model):
    """Entity type model for Bookmark."""
    name = models.CharField(_("Name"), max_length=100)
    description = models.TextField(_("Description"), blank=True)
    website = models.URLField(_("Website"))
    image = models.ImageField(_("Image"), upload_to="bookmarks/")
    status = models.BooleanField(_("Status"), default=True)

    class Meta:
        """Meta definition for Bookmark."""
        verbose_name = _("Bookmark")
        verbose_name_plural = _("Bookmarks")

    def __str__(self):
        return str(self.name)
