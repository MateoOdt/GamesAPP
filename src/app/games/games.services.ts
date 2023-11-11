import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/Game';
import { Observable, of, tap } from 'rxjs';
import { AuthServices } from '../auth/auth.services';

@Injectable({
  providedIn: 'root',
})
export class GamesServices {
  private baseUrl = 'http://localhost:8000/games/';
  private postBaseUrl = 'http://localhost:8000/games/';
  private postsCache$?: Observable<Game[]>;

  token2 = this.authService.getToken();

  headers_object = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.token2);

  httpOptions = {
    headers: this.headers_object,
  };

  constructor(private http: HttpClient, private authService: AuthServices) {}

  /**
   * GET Games API Call
   * @returns Object
   */
  getGames(): any {
    return this.http.get<Game>(this.baseUrl, this.httpOptions);
  }

  /**
   * POST Games API Call
   * @param game
   * @returns
   */
  createGame(game: Game): any {
    return this.http
      .post<Game>(`${this.postBaseUrl}`, game, this.httpOptions)
      .pipe(
        tap(() => {
          this.postsCache$ = of([]);
        })
      );
  }

  deleteGame(url: string): any {
    console.log(url);
    return this.http.delete(url, this.httpOptions).subscribe();
  }
}
