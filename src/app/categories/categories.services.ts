import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesServices {
  private baseUrl = 'http://localhost:8000/categorie/';
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5NDU0MjY3LCJpYXQiOjE2OTk0NTA2NjcsImp0aSI6ImRhNmRhNjQ0YTQ3YjRlYjZiNTNjMTJlNzY1OTVlMjIzIiwidXNlcl9pZCI6MX0.XFv3gAtU0spJIkOuQT4RIkkMGNtrfDZX0Civ2cOlbFE';

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
