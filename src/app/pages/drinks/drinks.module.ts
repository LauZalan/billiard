import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinksRoutingModule } from './drinks-routing.module';
import { DrinksComponent } from './drinks.component';


@NgModule({
  declarations: [
    DrinksComponent
  ],
  imports: [
    CommonModule,
    DrinksRoutingModule
  ]
})
export class DrinksModule { }
