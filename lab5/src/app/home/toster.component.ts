import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../housing-location/toster.webcomponent';
import { Item } from '../item';
import { TosterService } from '../toster.service';

@Component({
  selector: 'app-blender',
  standalone: true,
  imports: [
    CommonModule,
    ItemComponent,
  ],
  template: `
    <section class="results">
      <app-item
        *ngFor="let item of tosterList"
        [item]="item">
      </app-item>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class TosterComponent {
  tosterList: Item[] = [];
  tosterService: TosterService = inject(TosterService);
  filteredBlenderList: Item[] = [];
  constructor() {
    this.tosterList = this.tosterService.getAllTosters();
    this.filteredBlenderList = this.tosterList;
  }
  }