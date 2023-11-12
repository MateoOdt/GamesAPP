import { Component, OnInit, Query } from '@angular/core';
import { GamesServices } from '../games.services';
import { QueryRes } from 'src/app/interfaces/QueryRes';
import { CategoriesServices } from 'src/app/categories/categories.services';
import { QueryResCategorie } from 'src/app/interfaces/QueryResCategorie';
import { Categorie } from 'src/app/interfaces/Categorie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-view',
  templateUrl: './games-view.component.html',
  styleUrls: ['./games-view.component.css'],
})
export class GamesViewComponent implements OnInit {
  constructor(private gamesService: GamesServices, private router: Router) {}

  games: QueryRes = { count: 0, next: '', previous: '', results: [] };
  categorie: Categorie = { id: 0, name: '' };
  categorieIds: number[] = [];

  ngOnInit(): void {
    this.gamesService.getGames().subscribe((games: QueryRes) => {
      this.games = games;
    });
  }

  deleteGame(gameUrl: string): void {
    this.gamesService.deleteGame(gameUrl);
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
