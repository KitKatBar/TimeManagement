import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private url: string = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  getUrl(): string {
    return this.url;
  }

  reportService(Date1: any, Date2: any) {

  }
}
