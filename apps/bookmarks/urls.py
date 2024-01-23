"""URLs for Bookmarks App."""

from django.urls import path
from apps.bookmarks.views import BookmarksListView, BookmarkDetailView, bookmark_search

app_name = "bookmarks"

urlpatterns = [
    path("", BookmarksListView.as_view(), name="bookmark_list"),
    path("search/", bookmark_search, name='search'),
    path("<int:pk>/", BookmarkDetailView.as_view(), name="bookmark_detail"),
]
