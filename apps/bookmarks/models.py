"""Models for Bookmarks App."""

from django.db import models


class Bookmark(models.Model):
    """Entity type model for Bookmark."""
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    website = models.URLField()
    image = models.ImageField(upload_to='bookmarks/')
    status = models.BooleanField(default=True)

    def __str__(self):
        return str(self.name)
