from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('app.accounts.urls')),
    path('orders/', include('app.orders.urls')),
    path('events/', include('app.events.urls')),
    # Include any additional URL configurations here
]
