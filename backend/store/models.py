from django.db import models

class Products(models.Model):
  CATEGORY_CHOICES = [
    ('dogs', 'Dogs'),
    ('cats', 'Cats'),
    ('birds', 'Birds'),
    ('fish', 'Fish'),
    ('rodents', 'Rodents'),
  ]

  category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
  name = models.CharField(max_length=100)
  price = models.DecimalField(max_digits=10, decimal_places=2)
  image = models.ImageField(upload_to='products/')

  def __str__ (self):
    return self.name 