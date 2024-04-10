from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']
        extra_kwargs = {
            'name': {'required': False},
            'description': {'required': False},
            'city': {'required': False},
            'address': {'required': False}
        }

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']
        extra_kwargs = {
            'name': {'required': False},
            'description': {'required': False},
            'salary': {'required': False},
            'company': {'required': False}
        }