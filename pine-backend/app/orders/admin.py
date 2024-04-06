# app/orders/admin.py

from django.contrib import admin
from .models import Order, OrderItem

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1

class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderItemInline]
    list_display = ('id', 'user', 'created_at', 'updated_at', 'status')
    list_filter = ('status', 'created_at')
    search_fields = ('user__username',)

admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem)
