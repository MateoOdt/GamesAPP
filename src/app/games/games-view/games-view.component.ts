import { Component, OnInit, Query } from '@angular/core';
import { GamesServices } from '../games.services';
import { QueryRes } from 'src/app/interfaces/QueryRes';

@Component({
  selector: 'app-games-view',
  templateUrl: './games-view.component.html',
  styleUrls: ['./games-view.component.css'],
})
export class GamesViewComponent implements OnInit {
  constructor(private gamesService: GamesServices) {}

  games: QueryRes = { count: 0, next: '', previous: '', results: [] };

  ngOnInit(): void {
    this.gamesService.getGames().subscribe((games: QueryRes) => {
      this.games = games;
    });
  }

  deleteGame(gameUrl: string): void {
    console.log(gameUrl);
    this.gamesService.deleteGame(gameUrl);
  }
}
