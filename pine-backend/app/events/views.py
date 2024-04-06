# app/events/views.py

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Event
from .serializers import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing event instances.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        # Custom logic here, if necessary
        serializer.save()

    def perform_update(self, serializer):
        # Custom logic here, if necessary
        serializer.save()

    def perform_destroy(self, instance):
        # Custom logic here, if necessary
        instance.delete()
