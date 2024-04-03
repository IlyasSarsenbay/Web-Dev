import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../housing-location/blender.webcomponent';
import { Item } from '../item';
import { BlenderService } from '../blenders';

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

export class BlenderComponent {
  blenderList: Item[] = [];
  blenderService: BlenderService = inject(BlenderService);
  filteredBlenderList: Item[] = [];
  constructor() {
    this.blenderList = this.blenderService.getAllBlenders();
    this.filteredBlenderList = this.blenderList;
  }
  }