import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuapplSuccessRoutingModule } from './suappl-success-routing.module';
import { SuapplSuccessComponent } from './suappl-success.component';


@NgModule({
  declarations: [
    SuapplSuccessComponent
  ],
  imports: [
    CommonModule,
    SuapplSuccessRoutingModule
  ]
})
export class SuapplSuccessModule { }
