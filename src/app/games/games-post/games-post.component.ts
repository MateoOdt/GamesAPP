import { Component } from '@angular/core';
import { CategoriesServices } from 'src/app/categories/categories.services';
import { QueryResCategorie } from 'src/app/interfaces/QueryResCategorie';
import { GamesServices } from '../games.services';

@Component({
  selector: 'app-games-post',
  templateUrl: './games-post.component.html',
  styleUrls: ['./games-post.component.css'],
})
export class GamesPostComponent {
  constructor(
    private categorieService: CategoriesServices,
    private gamesService: GamesServices
  ) {}

  selectedId = '';

  categorieRes: QueryResCategorie = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };

  data = {
    title: 'aa',
    desc: 'aaa',
    addedDate: '2023-11-08',
    plateform: 'STEAM',
    categorie: this.selectedId,
  };

  ngOnInit(): void {
    this.categorieService
      .getCategories()
      .subscribe((categorie: QueryResCategorie) => {
        this.categorieRes = categorie;
      });
  }

  onCategorySelection(id: any): void {
    this.selectedId = `http://127.0.0.1:8000/categorie/${id}/`;
    this.data.categorie = this.selectedId;
    console.log(this.selectedId, this.data);
  }

  onSubmit() {
    try {
      const postValues = this.data;
      this.gamesService.createGame(postValues).subscribe(
        (response: any) => {
          console.log('Post created successfully.');
          console.log(response);
        },
        (error: any) => {
          console.log('Error:', error);
        }
      );
    } catch (err) {
      console.error(err);
    }
  }
}
