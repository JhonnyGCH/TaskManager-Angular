import { Routes } from '@angular/router';
import { LoginComponent } from './UI/components/login/login.component';
import { DashboardComponent } from './UI/pages/dashboard/dashboard.component';
import { authGuard } from './infrastructure/auth/auth.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [authGuard],
    },
  ];