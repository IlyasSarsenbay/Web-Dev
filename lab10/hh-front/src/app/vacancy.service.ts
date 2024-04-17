import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from './models';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://localhost:8000/api/vacancies/';

  constructor(private http: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiUrl}${id}/`);
  }

  createVacancy(vacancy: Vacancy): Observable<Vacancy> {
    return this.http.post<Vacancy>(this.apiUrl, vacancy);
  }

  updateVacancy(id: number, vacancy: Vacancy): Observable<Vacancy> {
    return this.http.put<Vacancy>(`${this.apiUrl}${id}/`, vacancy);
  }

  deleteVacancy(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`);
  }
}