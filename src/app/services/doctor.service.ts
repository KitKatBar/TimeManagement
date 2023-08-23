import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Doctor } from '../models/doctor';
import { Location } from '../models/location';
import { Role } from '../models/role';
import { Sector } from '../models/sector';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctors: Doctor[] = [];
  
  /*constructor() {
    this.doctors.push(new Doctor(0, "Sandra", "Gatt", 36876,
    new Location(0, "", new Sector(0, "")), new Role(0, ""), ""))
    this.doctors.push(new Doctor(0, "Harvey", "Weingarten", 46780,
    new Location(0, "", new Sector(0, "")), new Role(0, ""), ""))
    this.doctors.push(new Doctor(0, "Melvin", "Katz", 46781,
    new Location(0, "", new Sector(0, "")), new Role(0, ""), ""))
    this.doctors.push(new Doctor(0, "Michael", "Segarra", 46782,
    new Location(0, "", new Sector(0, "")), new Role(0, ""), ""))
    this.doctors.push(new Doctor(0, "William", "Hartko", 46783,
    new Location(0, "", new Sector(0, "")), new Role(0, ""), ""))
  }*/

  //getDoctors(): Observable<any> {
    //return this.httpClient.get(this.url)
      //.pipe(catchError(this.errorHandler));
  //}

  loggedUser: Doctor | undefined;
  url: string = this.urlServ.getUrl() + 'doctor';

  constructor(private urlServ: UrlService, private http: HttpClient) { }

  getDoctors(): Observable<any> {
    return this.http.get(this.url)
      .pipe(catchError(this.errorHandler));
  }

  getDoctorById(id: number): Observable<any> {
    return this.http.get(this.url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }

  postDoctor(doctor: any): Observable<any> {
    return this.http.post(this.url, doctor)
      .pipe(catchError(this.errorHandler));
  }

  updateDoctor(id: number, doctor: any): Observable<any> {
    console.log(doctor);
    console.log(this.url + "/" + id);
    return this.http.put(this.url + "/" + id, doctor)
      .pipe(catchError(this.errorHandler));
  }

  deleteDoctor(id: any) {
    console.log(id)
    return this.http.delete(this.url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
  /*
  checkLogin(): Observable<Doctor> {
    return this.http.get(this.url).pipe(
      map(resp => resp as Doctor)
    );
  }

  logIn(username:string, password:string): Observable<Doctor> {
    let loginInfo = {
      username:username,
      password:password
    }
    return this.http.put(this.url, loginInfo).pipe(
      map(resp => resp as Doctor)
    );
  }

  logOut(): Observable<any> {
    return this.http.delete(this.url).pipe();
  }

  reportService(Date1: any, Date2: any) {

  }*/
}
