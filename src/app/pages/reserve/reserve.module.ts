import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserveRoutingModule } from './reserve-routing.module';
import { ReserveComponent } from './reserve.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReserveComponent
  ],
  imports: [
    CommonModule,
    ReserveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReserveModule { }
