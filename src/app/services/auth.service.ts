import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean;
  private username: string | undefined;

  constructor() {
      this.isLoggedIn = false;
  }

  login(username: string, password: string) {
      //Assuming users are provided the correct credentials.
      //In real app you will query the database to verify.
      this.isLoggedIn = true;
      this.username = username;
      return of(this.isLoggedIn);
  }

  getUsername(): any {
    return this.username;
  }

  isUserLoggedIn(): boolean {
      return this.isLoggedIn;
  }

  isAdminUser(): boolean {
      if (this.username == 'admin') {
          return true; 
      }
      return false;
  }

  logoutUser(): void{
    this.isLoggedIn = false;
  }
}
