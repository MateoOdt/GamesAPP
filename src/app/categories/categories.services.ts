import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesServices {
  private baseUrl = 'http://localhost:8000/categorie/';
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5NTY2ODM5LCJpYXQiOjE2OTk1NjMyMzksImp0aSI6ImU2OWM5ZThjYzBmMzQwZWNiNjExMmNiODIzYzhkOWI1IiwidXNlcl9pZCI6MX0.IE2OAsunscFeWp_Kp6VeZ10K6LHCgTdT1DVsGpvXePI';

  headers_object = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.token);

  httpOptions = {
    headers: this.headers_object,
  };

  constructor(private http: HttpClient) {}

  /**
   * GET Categories API Call
   * @returns Object
   */
  getCategories(): any {
    return this.http.get<any>(this.baseUrl, this.httpOptions);
  }
}
