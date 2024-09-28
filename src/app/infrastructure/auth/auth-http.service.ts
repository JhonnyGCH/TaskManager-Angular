import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService, AuthServiceImpl } from '../../core/services/auth.service';
import { User } from '../../core/entities/user';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService implements AuthService {
  private apiUrl = '';
  private currentUser: User | null = null;

  constructor(private http: HttpClient) {}

  async login(email: string, password: string): Promise<User | null> {
    const response = await this.http
      .post<{ id: number; email: string; token: string }>(
        `${this.apiUrl}/login`,
        { email, password }
      )
      .toPromise();
    if (!response) {
      return null;
    }
    this.currentUser = new User(response.id, response.email, response.token);
    localStorage.setItem('token', response.token);
    return this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('token');
  }

  getCurrentUser(): User | null {
    const token = localStorage.getItem('token');
    return this.currentUser && token ? this.currentUser : null;
  }
}
