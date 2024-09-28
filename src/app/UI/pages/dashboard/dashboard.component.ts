import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logout } from '../../../core/use-cases/logout';
import { AuthHttpService } from '../../../infrastructure/auth/auth-http.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private logoutUseCase: Logout, private router: Router, private authService: AuthHttpService) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  onLogout() {
    this.logoutUseCase.execute();
    this.router.navigate(['/login']);
  }
}