# app/orders/apps.py

from django.apps import AppConfig

class OrdersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app.orders'  # Make sure this matches the path to your 'orders' app

    # You can add custom app configuration here if needed
