import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../../core/use-cases/login'
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string | null = null;

  constructor(private loginUseCase: Login, private router: Router) {}

  async onLogin() {
    try {
      const user = await this.loginUseCase.execute(this.email, this.password);
      console.log('Logged in:', user);
      this.router.navigate(['/dashboard']);
    } catch (err) {
      this.error = 'Invalid credentials';
    }
  }
}