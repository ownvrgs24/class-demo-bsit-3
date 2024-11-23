import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly http = inject(HttpClient);

  protected readonly baseUrl = 'http://localhost:3000/bsit3d-api';

  postMethod(url: string, data: any) {
    return this.http.post(`${this.baseUrl}/${url}`, data);
  }

  getMethod(url: string) {
    return this.http.get(`${this.baseUrl}/${url}`);
  }

  deleteMethod(url: string) {
    return this.http.delete(`${this.baseUrl}/${url}`);
  }

  putMethod(url: string, data: any) {
    return this.http.put(`${this.baseUrl}/${url}`, data);
  }

}
