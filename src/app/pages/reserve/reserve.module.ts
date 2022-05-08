import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserveRoutingModule } from './reserve-routing.module';
import { ReserveComponent } from './reserve.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ReserveComponent
  ],
  imports: [
    CommonModule,
    ReserveRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ReserveModule { }
