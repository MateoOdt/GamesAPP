import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServices } from '../auth/auth.services';
import { Categorie } from '../interfaces/Categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesServices {
  private baseUrl = 'http://localhost:8000/categorie/';
  token = this.authService.getToken();

  headers_object = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.token);

  httpOptions = {
    headers: this.headers_object,
  };

  constructor(private http: HttpClient, private authService: AuthServices) {}

  /**
   * GET Categories API Call
   * @returns Object
   */
  getCategories(): Observable<any> {
    return this.http.get<any>(this.baseUrl, this.httpOptions);
  }

  /**
   * Get Categorie By id: API CALL
   * @param url
   * @returns
   */
  GetCategorieById(url: any): Observable<Categorie> {
    return this.http.get<Categorie>(url, this.httpOptions);
  }
}
