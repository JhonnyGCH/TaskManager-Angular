import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './UI/components/login/login.component';
import { DashboardComponent } from './UI/pages/dashboard/dashboard.component';
import { authGuard } from './infrastructure/auth/auth.guard';

import { routes } from './app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}