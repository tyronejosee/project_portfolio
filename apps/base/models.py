"""Models for Base App."""

from django.db import models


class Project(models.Model):
    """Entity type model for Project."""

    title = models.CharField(max_length=50)
    description = models.TextField()
    repository = models.URLField()
    website = models.URLField(null=True, blank=True)
    image = models.FileField(upload_to='project/')
    status = models.CharField(max_length=150)

    def __str__(self):
        return str(self.title)
    