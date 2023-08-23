import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {
  
  //constructor(private authService: AuthService, private router: Router) {}
  constructor(private adminService: AdminService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.adminService.isUserLoggedIn()) {
      alert('You must be logged in to view this page.');
      this.router.navigate(["login"], { queryParams: { retUrl: route.url }});
      return false;
    }
    return true;
  }
  
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (!this.adminService.isAdminUser()) {
      alert('You must have admin privileges to view this page.');
      return false;
    }
    return true;
  }
  
}
