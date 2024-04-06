# app/events/admin.py

from django.contrib import admin
from .models import Event

class EventAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'capacity', 'is_active')  # Adjust according to your Event model fields
    list_filter = ('date', 'is_active')
    search_fields = ('name',)

admin.site.register(Event, EventAdmin)
