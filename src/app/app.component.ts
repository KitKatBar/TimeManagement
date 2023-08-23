import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './services/admin.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TimesheetManagement';

  //constructor (private authService: AuthService, private router: Router) { }
  constructor (private adminService: AdminService, private router: Router) { }

  userLogin(): boolean {
    return this.adminService.isUserLoggedIn();
  }

  getUsername(): string{
    return this.adminService.getUsername();
  }

  logout() {
    this.adminService.logoutUser();
    this.router.navigate(['']);
  }
}
