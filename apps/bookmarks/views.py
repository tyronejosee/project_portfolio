"""Views for Bookmarks App."""

from django.views.generic import ListView
from django.views.generic.detail import DetailView
from django.shortcuts import render
from django.core.paginator import Paginator
from django.db.models import Q
from apps.bookmarks.models import Bookmark


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

    # def get_context_data(self, **kwargs):
    #     context = super().get_context_data(**kwargs)
    #     context['tags'] = Tag.objects.all()
    #     context['selected_tags'] = self.request.GET.getlist('tags')
    #     return context


class BookmarkDetailView(DetailView):
    """View to display the details of a bookmark."""
    model = Bookmark
    template_name = "bookmarks/bookmark_detail.html"
    context_object_name = "bookmark"
    pk_url_kwarg = "pk"


def bookmark_search(request):
    """Search bar, filtering by product title and brand."""
    queryset = request.GET.get("search")
    bookmarks = Bookmark.objects.filter(status=True)

    # Search filter
    if queryset:
        bookmarks = Bookmark.objects.filter(
            Q(name__icontains=queryset) |
            Q(tags__name__icontains=queryset)
        ).distinct()

    # Bookmark count
    results = bookmarks.count()

    # Pagination
    paginator = Paginator(bookmarks, 12)
    page_number = request.GET.get("page")
    page_obj = paginator.get_page(page_number)

    return render(request, "bookmarks/bookmark_list.html", {
        'bookmarks': bookmarks,
        'title': queryset,
        'results': results,
        'page_obj': page_obj
    })
