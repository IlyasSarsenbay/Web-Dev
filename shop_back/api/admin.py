from django.contrib import admin

# Register your models here.
from api.models import Product
from api.models import Category

admin.site.register(Product)
admin.site.register(Category)