from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
import json
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response

class CompanyList(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class CompanyDetail(APIView):
    def get_object(self, pk):
        return get_object_or_404(Company, pk=pk)

    def get(self, request, pk):
        company = self.get_object(pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, pk):
        company = self.get_object(pk)
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        company = self.get_object(pk)
        company.delete()
        return Response({'message': 'Company deleted successfully'}, status=204)
    
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
            return JsonResponse(serializer.data, status=201)  
        return JsonResponse(serializer.errors, status=400)  

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
        return JsonResponse({'message': 'Vacancy deleted successfully'}, status=204)  

@csrf_exempt
def top_ten_vacancies(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.order_by('salary')[0:10]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)