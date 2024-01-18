"""Models for Bookmarks App."""

from django.db import models
from django.utils.translation import gettext as _
from apps.base.models import validate_image_extension


class Tag(models.Model):
    """Catalog-type model for Tag."""

    name = models.CharField(_("Name"), unique=True, max_length=50)
    color = models.CharField(_("Color"), blank=True, null=True, max_length=50)

    class Meta:
        """Meta definition for Tag."""
        verbose_name = _("Tag")
        verbose_name_plural = _("Tags")

    def __str__(self):
        return str(self.name)


class Bookmark(models.Model):
    """Entity type model for Bookmark."""
    name = models.CharField(_("Name"), max_length=100)
    description = models.TextField(_("Description"), blank=True)
    website = models.URLField(_("Website"))
    image = models.ImageField(_("Image"), upload_to="bookmarks/", validators=[validate_image_extension])
    tags = models.ManyToManyField(Tag, verbose_name=_("Tags"))
    status = models.BooleanField(_("Status"), default=True)

    class Meta:
        """Meta definition for Bookmark."""
        verbose_name = _("Bookmark")
        verbose_name_plural = _("Bookmarks")

    def __str__(self):
        return str(self.name)
