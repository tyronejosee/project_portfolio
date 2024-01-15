"""Admin config for Bookmarks App."""

from django.contrib import admin
from apps.bookmarks.models import Bookmark, Tag


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    """Admin config for the Tag model."""


@admin.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
    """Admin config for the Bookmark model."""
    list_display = ("name", "website", "status",)
    ordering = ("pk",)
