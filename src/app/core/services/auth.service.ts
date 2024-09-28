import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { AuthHttpService } from '../../infrastructure/auth/auth-http.service'; 

@Injectable({
  providedIn: 'root',
})

export class AuthServiceImpl implements AuthService {
  private currentUser: User | null = null;

  constructor(private AuthHttpService: AuthHttpService) {}

  async login(email: string, password: string): Promise<User | null> {
    this.currentUser = await this.AuthHttpService.login(email, password);
    return this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
    this.AuthHttpService.logout();
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}

export interface AuthService {
  login(email: string, password: string): Promise<User | null>;
  logout(): void;
  getCurrentUser(): User | null;
}