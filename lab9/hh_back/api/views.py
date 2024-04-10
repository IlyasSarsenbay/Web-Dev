from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
import json

@csrf_exempt
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)  # 201 Created
        return JsonResponse(serializer.errors, status=400)  # 400 Bad Request

@csrf_exempt
def company_detail(request, id):
    company = get_object_or_404(Company, pk=id)
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        serializer = CompanySerializer(company, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({'message': 'Company deleted successfully'}, status=204)  # 204 No Content

@csrf_exempt
def company_vacancies(request, id):
    company = get_object_or_404(Company, pk=id)
    if request.method == "GET":
        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)  # 201 Created
        return JsonResponse(serializer.errors, status=400)  # 400 Bad Request

@csrf_exempt
def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, pk=id)
    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        serializer = VacancySerializer(vacancy, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({'message': 'Vacancy deleted successfully'}, status=204)  # 204 No Content

@csrf_exempt
def top_ten_vacancies(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)