"""Views for Bookmarks App."""

from django.views.generic import ListView
from django.views.generic.detail import DetailView
from django.db.models import Q
from apps.bookmarks.models import Bookmark


class BookmarksListView(ListView):
    """View renders lists of bookmarks."""
    model = Bookmark
    template_name = "bookmarks/bookmark_list.html"
    context_object_name = "bookmarks"
    paginate_by = 12
    ordering = ['-id']

    def get_queryset(self):
        queryset = Bookmark.objects.filter(status=True)

        tags = self.request.GET.getlist('tags')
        if tags:
            queryset = queryset.filter(tags__in=tags).distinct()

        return queryset


class BookmarkDetailView(DetailView):
    """View to display the details of a bookmark."""
    model = Bookmark
    template_name = "bookmarks/bookmark_detail.html"
    context_object_name = "bookmark"
    pk_url_kwarg = "pk"


class BookmarkSearchListView(ListView):
    """Search bar, filtering by product title and brand."""
    model = Bookmark
    template_name = "bookmarks/bookmark_list.html"
    context_object_name = "bookmarks"
    paginate_by = 12
    ordering = ['-id']

    def get_queryset(self):
        queryset = Bookmark.objects.filter(status=True)
        search_query = self.request.GET.get("search")

        # Search filter
        if search_query:
            queryset = queryset.filter(
                Q(name__icontains=search_query) |
                Q(tags__name__icontains=search_query)
            ).distinct()

        return queryset
