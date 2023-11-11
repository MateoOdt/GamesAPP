import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  /**
   * API Call : Post
   * @param username
   * @param password
   * @returns TOKEN
   */
  login(username: string, password: string): Observable<any> {
    const requestBody = {
      username,
      password,
    };

    return this.http.post('http://127.0.0.1:8000/token/', requestBody);
  }

  setToken(token: string): void {
    this.token = token;

    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }

    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.token = null;

    localStorage.removeItem('token');
  }
}
