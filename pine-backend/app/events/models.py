# app/events/models.py

from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField()
    description = models.TextField()
    capacity = models.PositiveIntegerField()
    is_active = models.BooleanField(default=True)  # To enable/disable events

    # Additional fields like event_type, price, or organizer can be added as needed

    def __str__(self):
        return f"{self.name} on {self.date}"
