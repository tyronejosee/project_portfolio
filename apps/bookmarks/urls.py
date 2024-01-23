"""URLs for Bookmarks App."""

from django.urls import path
from apps.bookmarks.views import BookmarksListView, BookmarkDetailView, BookmarkSearchListView

app_name = "bookmarks"

urlpatterns = [
    path("", BookmarksListView.as_view(), name="bookmark_list"),
    path("<int:pk>/", BookmarkDetailView.as_view(), name="bookmark_detail"),
    path("find/", BookmarkSearchListView.as_view(), name='bookmark_search'),
]
