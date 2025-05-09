from django.contrib import admin
from django.urls import path, include 
from django.conf import settings
from django.conf.urls.static import static
from store import urls as store_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(store_urls)),
    path('products/', include(store_urls)),
    path('products/<str:category>/', include(store_urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)