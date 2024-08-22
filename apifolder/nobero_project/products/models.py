from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=255)
    current_price = models.CharField(max_length=50)
    mrp = models.CharField(max_length=50)
    bought_count = models.CharField(max_length=50)
    selected_color = models.CharField(max_length=50)
    sizes = models.JSONField()
    link = models.URLField(max_length=500, null=True, blank=True)
    image_url = models.URLField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.title
