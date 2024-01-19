"""URLs for Bookmarks App."""

from django.urls import path
from apps.bookmarks.views import BookmarksListView, BookmarkDetailView, bookmark_search

app_name = "bookmarks"

urlpatterns = [
    path("", bookmark_search, name='search'),
    path("", BookmarksListView.as_view(), name="bookmark_list"),
    path("<int:pk>/", BookmarkDetailView.as_view(), name="bookmark_detail"),
]
