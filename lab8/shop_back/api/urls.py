from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:id>/', views.ProductDetailAPIView.as_view(), name='product-detail'),
    path('categories/', views.CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:id>/', views.CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', views.CategoryProductsAPIView.as_view(), name='category-products'),
]