import { AuthServiceImpl } from '../../core/services/auth.service';

export class Logout {
  constructor(private authService: AuthServiceImpl) {}

  execute(): void {
    this.authService.logout();
  }
}