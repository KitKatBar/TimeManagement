import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Admin } from '../models/admin';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admins: Admin[] = [];

  /*constructor() {
    this.admins.push(new Admin("Mike", "Mitchell", "IT Director", "mike@email.com", "mikepass"));
    this.admins.push(new Admin("Carl", "Hooser", "Operations Manager", "carl@email.com", "carlpass"));
    this.admins.push(new Admin("Leigh", "Rapier", "Senior HR Manager", "leigh@email.com", "leighpass"));
  }*/

  private isLoggedIn: boolean;
  loggedUser: Admin | undefined;
  private fullName: string | undefined;
  url: string = this.urlServ.getUrl() + 'admin';

  constructor(private urlServ: UrlService, private http: HttpClient) { 
    this.isLoggedIn = false;
  }

  getAdmins(): Observable<any> {
    return this.http.get(this.url)
      .pipe(catchError(this.errorHandler));
  }

  getAdminById(id: number): Observable<any> {
    return this.http.get(this.url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }

  postAdmin(admin: any): Observable<any> {
    return this.http.post(this.url, admin)
      .pipe(catchError(this.errorHandler));
  }

  updateAdmin(id: number, admin: any): Observable<any> {
    console.log(admin);
    console.log(this.url + "/" + id);
    return this.http.put(this.url + "/" + id, admin)
      .pipe(catchError(this.errorHandler));
  }

  deleteAdmin(id: any) {
    console.log(id)
    return this.http.delete(this.url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }

  checkLogin(): Observable<Admin> {
    return this.http.get(this.url).pipe(
      map(resp => resp as Admin)
    );
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getUsername(): any {
    return this.fullName;
  }

  login(username: string, password: string): Observable<Admin> {
    let loginInfo = {
      username: username,
      password: password
    }

    //this.fullName = this.getFullName(this.http.put(this.url, loginInfo).pipe(map(resp => resp as Admin)))
    this.fullName = username;
    //this.isLoggedIn = true;
    return this.http.put(this.url, loginInfo).pipe(
      map(resp => resp as Admin)
    );
  }

  setLogin(login: boolean) {
    this.isLoggedIn = login;
  }

  getFullName(resp: any): string {
    console.log(resp);
    return (resp.firstName + " " + resp.lastName);
  }

  isAdminUser(): boolean {
    if (this.fullName == 'mike@email.com') {
        return true; 
    }
    return false;
  }

  logoutUser(): Observable<any> {
    this.isLoggedIn = false;
    return this.http.delete(this.url).pipe();
  }

  //getAdmins(): Observable<any> {
    //return this.httpClient.get(this.url)
      //.pipe(catchError(this.errorHandler));
  //}
}
