"""Admin config for Bookmarks App."""

from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from apps.bookmarks.models import Bookmark, Tag


# Import-Export
class TagResource(resources.ModelResource):
    """Class for importing and exporting data for the Tag model."""
    class Meta:
        """Meta definition for TagResource."""
        model = Tag


class BookmarkResource(resources.ModelResource):
    """Class for importing and exporting data for the Bookmark model."""
    class Meta:
        """Meta definition for BookmarkResource."""
        model = Bookmark


# Models
@admin.register(Tag)
class TagAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin config for the Tag model."""
    resource_class = TagResource

@admin.register(Bookmark)
class BookmarkAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin config for the Bookmark model."""
    list_display = ("name", "website", "status",)
    ordering = ("pk",)
    resource_class = BookmarkResource
