"""URLs for Bookmarks App."""

from django.urls import path
from apps.bookmarks.views import BookmarksListView, bookmark_search

app_name = "bookmarks"

urlpatterns = [
    path("", bookmark_search, name='search'),
    path("all/", BookmarksListView.as_view(), name="bookmark_list"),
]
