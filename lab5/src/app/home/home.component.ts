import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../housing-location/pans.webcomponent';
import { Item } from '../item';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ItemComponent
  ],
  template: `
    <section>
    </section>
    <section class="results">
      <app-item
        *ngFor="let item of filteredLocationList"
        [item]="item">
      </app-item>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  housingLocationList: Item[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: Item[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/