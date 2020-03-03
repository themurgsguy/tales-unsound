from django.contrib import admin

from .models import Place, Exit, Item, Interaction

class PlaceAdmin(admin.ModelAdmin):
    model = Place
    list_display = ('id', 'name')

admin.site.register(Place, PlaceAdmin)


class ExitAdmin(admin.ModelAdmin):
    model = Exit
    list_display = ('id', 'origin', 'destination', 'description')
    ordering = ('origin',)

admin.site.register(Exit, ExitAdmin)


class ItemAdmin(admin.ModelAdmin):
    model = Item
    list_display = ('id', 'name', 'description')

admin.site.register(Item, ItemAdmin)


class InteractionAdmin(admin.ModelAdmin):
    model = Interaction
    list_display = ('id', 'name', 'description')

admin.site.register(Interaction, InteractionAdmin)
