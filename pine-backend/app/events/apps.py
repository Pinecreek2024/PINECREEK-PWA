# app/events/apps.py

from django.apps import AppConfig

class EventsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app.events'  # Ensure this matches the actual Python path to your 'events' app

    # If you need to perform specific startup actions, they can be added here.
    # For example, you can override the `ready` method to set up signals.
