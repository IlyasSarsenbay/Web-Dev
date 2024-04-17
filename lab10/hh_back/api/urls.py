from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', CompanyList.as_view()),
    path('companies/<int:pk>/', CompanyDetail.as_view()),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/', top_ten_vacancies),
]