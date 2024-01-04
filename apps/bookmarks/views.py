"""Views for Bookmarks App."""

from django.views.generic import ListView
from apps.bookmarks.models import Bookmark


class BookmarksListView(ListView):
    """Pending."""
    model = Bookmark
    template_name = "bookmarks/bookmark_list.html"
    context_object_name = "bookmarks"
    paginate_by = 12

    def get_queryset(self):
        queryset = Bookmark.objects.filter(status=True)
        return queryset
