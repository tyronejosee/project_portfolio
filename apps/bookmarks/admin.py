"""Admin config for Bookmarks App."""

from django.contrib import admin
from apps.bookmarks.models import Bookmark


@admin.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
    """Admin config for the Bookmark model."""
    list_display = ('name', 'website', 'status',)
    ordering = ('pk',)
