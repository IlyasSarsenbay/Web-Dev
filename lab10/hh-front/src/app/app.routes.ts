import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' }, 
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyDetailsComponent },
  { path: 'vacancies', component: VacancyListComponent },
  { path: 'vacancies/:id', component: VacancyDetailsComponent },
  { path: '**', redirectTo: '/companies' } 
];