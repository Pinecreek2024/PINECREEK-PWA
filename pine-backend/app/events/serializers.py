# app/events/serializers.py

from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'  # This will include all fields of the Event model. Adjust if needed.

    # If you need to add any custom methods or validations, you can add them here.
    # For example, to validate the date field, you could add:
    # def validate_date(self, value):
    #     # Your validation logic
    #     return value
