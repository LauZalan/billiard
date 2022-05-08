import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./pages/application/application.module').then(m => m.ApplicationModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'drinks',
    loadChildren: () => import('./pages/drinks/drinks.module').then(m => m.DrinksModule)
  },
  {
    path: 'reserve',
    loadChildren: () => import('./pages/reserve/reserve.module').then(m => m.ReserveModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { 
    path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '**',
    redirectTo: '/main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
