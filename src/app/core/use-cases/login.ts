import { Injectable } from '@angular/core';
import { AuthService, AuthServiceImpl } from '../../core/services/auth.service';
import { User } from '../../core/entities/user';

@Injectable({
  providedIn: 'root',
  useClass: AuthServiceImpl,
})

export class Login {
  constructor(private authService: AuthService) {}

  async execute(email: string, password: string): Promise<User | null> {
    const user = await this.authService.login(email, password);
    if (!user) {
      throw new Error('Login failed: Invalid credentials');
    }
    return user;
  }
}