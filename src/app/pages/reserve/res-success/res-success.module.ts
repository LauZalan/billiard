import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResSuccessRoutingModule } from './res-success-routing.module';
import { ResSuccessComponent } from './res-success.component';


@NgModule({
  declarations: [
    ResSuccessComponent
  ],
  imports: [
    CommonModule,
    ResSuccessRoutingModule
  ]
})
export class ResSuccessModule { }
