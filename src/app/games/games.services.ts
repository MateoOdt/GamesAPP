import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/Game';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesServices {
  private baseUrl = 'http://localhost:8000/games/';
  private postBaseUrl = 'http://localhost:8000/games/';
  private postsCache$?: Observable<Game[]>;

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
