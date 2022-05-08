import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinksRoutingModule } from './drinks-routing.module';
import { DrinksComponent } from './drinks.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    DrinksComponent
  ],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    MatTableModule
  ]
})
export class DrinksModule { }
