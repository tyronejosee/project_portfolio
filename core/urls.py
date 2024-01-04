"""URL configuration for core project."""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.utils.translation import gettext as _
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("apps.base.urls")),
    path("bookmarks/", include("apps.bookmarks.urls")),
]


# Debug Config
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


# Custom attributes for admin
admin.site.site_header = _("Porfolio")
admin.site.site_title = _("Porfolio")
admin.site.index_title = _("Admin")
