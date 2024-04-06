# app/events/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet

router = DefaultRouter()
router.register(r'', EventViewSet)  # Registers the EventViewSet with the router

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
