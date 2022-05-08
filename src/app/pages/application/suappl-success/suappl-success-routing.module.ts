import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuapplSuccessComponent } from './suappl-success.component';

const routes: Routes = [{ path: '', component: SuapplSuccessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuapplSuccessRoutingModule { }
