import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../models';
import { CompanyService } from '../company.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company | undefined;
  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.loadCompanyDetails();
  }

  loadCompanyDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompany(id).subscribe(company => {
      this.company = company;
      this.loadVacanciesForCompany(id);
    });
  }

  loadVacanciesForCompany(companyId: number): void {
    this.companyService.getCompanyVacancies(companyId).subscribe(vacancies => {
      this.vacancies = vacancies;
    });
  }
}