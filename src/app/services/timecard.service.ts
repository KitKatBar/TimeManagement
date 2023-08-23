import { UrlService } from './url.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Punchinandout } from '../models/punchinandout';

@Injectable({
  providedIn: 'root'
})
export class TimecardService {
     
  url: string = this.urlServ.getUrl() + 'timecard';

  constructor(private urlServ: UrlService, private http: HttpClient) { }

  getTimecards(): Observable<any> {
    return this.http.get(this.url)
      .pipe(catchError(this.errorHandler));
  }
  
  getTimecardById(id: number): Observable<any> {
    return this.http.get(this.url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }

  getTimecardByDoctorId(id: number): Observable<any> {
    return this.http.get(this.url + "/doctor/" + id)
      .pipe(catchError(this.errorHandler));
  }

  postTimecard(timecard: any): Observable<any> {
    return this.http.post(this.url, timecard)
      .pipe(catchError(this.errorHandler));
  }

  updateTimecard(id: number, timecard: any): Observable<any> {
    console.log(timecard);
    console.log(this.url + "/" + id);
    return this.http.put(this.url + "/" + id, timecard)
      .pipe(catchError(this.errorHandler));
  }

  deleteTimecard(id: any) {
    console.log(id)
    return this.http.delete(this.url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }
    
  errorHandler(error: HttpErrorResponse) {
      return throwError(error.message || "Server Error");
    }
  }