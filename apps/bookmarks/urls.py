"""URLs for Bookmarks App."""

from django.urls import path
from apps.bookmarks.views import BookmarksListView

app_name = "bookmarks"

urlpatterns = [
    path("", BookmarksListView.as_view(), name="bookmark_list"),
]
