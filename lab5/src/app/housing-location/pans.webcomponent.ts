import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
    <section class="listing">
    <img class="listing-photo" [src]="item.photo" alt="Exterior photo of {{item.name}}">
      <h2 class="listing-heading">{{ item.name }}</h2>
      <p class="listing-location">{{ item.rating}}</p>
      <a [routerLink]="['/pandetails', item.id]">Learn More</a>

    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class ItemComponent {

  @Input() item!: Item;

}