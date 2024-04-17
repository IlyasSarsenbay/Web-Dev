import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies!: Vacancy[];

  constructor(private router: Router, private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.fetchVacancies();
  }

  fetchVacancies(): void {
    this.vacancyService.getVacancies().subscribe(vacancies => {
      this.vacancies = vacancies;
    });
  }

  viewVacancyDetails(id: number): void {
    this.router.navigate(['/vacancies', id]);
  }
}
