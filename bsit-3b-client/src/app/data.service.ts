import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly http = inject(HttpClient);
  
  protected baseUrl: string = 'http://localhost:8000/bsit3b-api';

  constructor() { }

  postRequest(url: string, data: any) {
    return this.http.post(`${this.baseUrl}/${url}`, data);
  }

  getRequest(url: string) {
    return this.http.get(`${this.baseUrl}/${url}`);
  }

  deleteRequest(url: string) {
    return this.http.delete(`${this.baseUrl}/${url}`);
  }

  putRequest(url: string, data: any) {
    return this.http.put(`${this.baseUrl}/${url}`, data);
  }
}
