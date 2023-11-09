import { Component } from '@angular/core';
import { GamesServices } from '../games.services';
import { QueryRes } from 'src/app/interfaces/QueryRes';

@Component({
  selector: 'app-games-view-table',
  templateUrl: './games-view-table.component.html',
  styleUrls: ['./games-view-table.component.css'],
})
export class GamesViewTableComponent {
  constructor(private gamesService: GamesServices) {}

  games: QueryRes = { count: 0, next: '', previous: '', results: [] };
  displayedColumns: string[] = ['Title', 'Desc', 'AddedDate', 'Plateform'];

  ngOnInit(): void {
    this.gamesService.getGames().subscribe((games: QueryRes) => {
      this.games = games;
    });
  }
}
