import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttpService } from './auth-http.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthHttpService); 
  const router = inject(Router);
  
  const currentUser = authService.getCurrentUser();

  if (currentUser) {
    return true; 
  } else {
    router.navigate(['/login']);
    return false; 
  }
};