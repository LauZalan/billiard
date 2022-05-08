import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';

const routes: Routes = [
  { path: '', component: ApplicationComponent},
  { path: 'applSuccess', loadChildren: () => import('./suappl-success/suappl-success.module').then(m => m.SuapplSuccessModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
