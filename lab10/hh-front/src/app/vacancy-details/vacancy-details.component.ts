import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit {
  vacancy!: Vacancy;

  constructor(private route: ActivatedRoute, private vacancyService: VacancyService) { }

  ngOnInit(): void {
    const vacancyId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchVacancyDetails(vacancyId);
  }

  fetchVacancyDetails(id: number): void {
    this.vacancyService.getVacancy(id).subscribe(vacancy => {
      this.vacancy = vacancy;
    });
  }
}