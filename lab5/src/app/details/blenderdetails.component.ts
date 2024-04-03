
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';
import { BlenderService } from '../blenders';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareButtonsModule,
    ShareIconsModule
  ],
  template: `
    <article>
      <img class="listing-photo" [src]="item?.photo"
        alt="Exterior photo of {{item?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading ">{{item?.name}}</h2>
        <p class="listing-location">{{item?.rating}},<br> {{item?.desc}}, <br> 
        Количество лайков: {{item?.likes}} </p>
        <a [href]="item?.link">Kaspi</a> <br>
        <button (click)="like()" class="button">Like</button> <br>
        <button (click)="remove()" class="button">Remove</button>
        <share-buttons class="but" theme="material-dark" [show]="2"></share-buttons>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class BlenderDetailsComponent implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);
  blenderService = inject(BlenderService);
  item: Item | undefined;
  loaded: boolean = false;
  constructor(private router: Router) {
    // Existing constructor code
  }
  like(): void {
    // Assuming you have a method in your service named increaseLikes
    if (this.item) {
        this.blenderService.increaseLikes(this.item.id);
    }
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get('id'));
        this.blenderService.getId(productId).subscribe((item) => {
          this.item = item;
          this.loaded = true;
        });
    });
  }
  remove(): void {
    if (this.item) {
        this.blenderService.removeItem(this.item.id);
    }
    this.router.navigate(['/']);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/