import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlenderComponent } from './home/blender.component';
import { PansDetailsComponent } from './details/pansdetails.component';
import { BlenderDetailsComponent } from './details/blenderdetails.component';
import { TosterDetailsComponent } from './details/tosterdetails.component';
import { CoffeDetailsComponent } from './details/coffedetails.component';
import { TosterComponent } from './home/toster.component';
import { CoffeMachineComponent } from './home/coffe.component';
const routeConfig: Routes = [
  
  {
    path: 'pandetails/:id',
    component: PansDetailsComponent,
    title: 'Pan details',
  },
  {
    path: 'blenderdetails/:id',
    component: BlenderDetailsComponent,
    title: 'Blender details',
  },
  {
    path: 'coffeemachinedetails/:id',
    component: CoffeDetailsComponent,
    title: 'Coffe Machine details',
  },
  {
    path: 'tosterdetails/:id',
    component: TosterDetailsComponent,
    title: 'Toster details',
  },
  {
   path:'Pans',
   component: HomeComponent,
    title: 'Pans',
    data: { category: 'pans' }
  },
  {
    path:'Blenders',
    component: BlenderComponent,
     title: 'Blenders',
     data: { category: 'blenders' },
   },
   {
    path:'Tosters',
    component: TosterComponent,
     title: 'Tosters',
     data: { category: 'tosters' },
   },
   {
    path:'CoffeMachines',
    component: CoffeMachineComponent,
     title: 'CoffeMachines',
     data: { category: 'coffe' },
   }
   
];

export default routeConfig;


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/