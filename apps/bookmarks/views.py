"""Views for Bookmarks App."""

from django.views.generic import ListView
from apps.bookmarks.models import Bookmark, Tag


class BookmarksListView(ListView):
    """View renders lists of bookmarks."""
    model = Bookmark
    template_name = "bookmarks/bookmark_list.html"
    context_object_name = "bookmarks"
    paginate_by = 12

    def get_queryset(self):
        queryset = Bookmark.objects.filter(status=True)

        tags = self.request.GET.getlist('tags')
        if tags:
            queryset = queryset.filter(tags__in=tags).distinct()

        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['tags'] = Tag.objects.all()
        context['selected_tags'] = self.request.GET.getlist('tags')

        return context
