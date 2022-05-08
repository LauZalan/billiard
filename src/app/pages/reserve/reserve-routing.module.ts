import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserveComponent } from './reserve.component';

const routes: Routes = [
  { path: '', component: ReserveComponent},
  { path: 'resSuccess', loadChildren: () => import('./res-success/res-success.module').then(m => m.ResSuccessModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReserveRoutingModule { }
