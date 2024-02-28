import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header>
          <span class="logo">Products</span>
        </header>
      </a>
      <section class="content">
      <a [routerLink]="['/Pans']" class="category">Pans</a>
      <a [routerLink]="['/Blenders']" class="category">Blenders</a>
      <a [routerLink]="['/Tosters']" class="category">Tosters</a>
      <a [routerLink]="['/CoffeMachines']" class="category">Coffe Machines</a>
        <router-outlet></router-outlet>
      </section>
      
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/