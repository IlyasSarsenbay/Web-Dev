import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../housing-location/coffe.webcomponent';
import { Item } from '../item';
import { CoffeMachineService } from '../coffeemachine';

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
        *ngFor="let item of blenderList"
        [item]="item">
      </app-item>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class CoffeMachineComponent {
  blenderList: Item[] = [];
  blenderService: CoffeMachineService = inject(CoffeMachineService);
  filteredBlenderList: Item[] = [];
  constructor() {
    this.blenderList = this.blenderService.getAllCoffeMachines();
    this.filteredBlenderList = this.blenderList;
  }
  }