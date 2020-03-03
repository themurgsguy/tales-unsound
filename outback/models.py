from django.db import models


class Place(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    exits = models.ManyToManyField('self', through='Exit', through_fields=('origin', 'destination'))

    def __str__(self):
        return self.name


class Exit(models.Model):
    description = models.TextField()
    origin = models.ForeignKey(Place, on_delete=models.CASCADE)
    destination = models.ForeignKey(Place, on_delete=models.CASCADE, related_name='+')

    def __str__(self):
        return f'{self.origin.name} -> {self.destination.name}'


class Item(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    place = models.ForeignKey(Place, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Interaction(models.Model):
    name = models.CharField(max_length=32)
    description = models.TextField()
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
