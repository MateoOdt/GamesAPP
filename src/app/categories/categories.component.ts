import { Component } from '@angular/core';
import { CategoriesServices } from './categories.services';
import { QueryResCategorie } from '../interfaces/QueryResCategorie';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categorieRes: QueryResCategorie = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };

  constructor(private categorieService: CategoriesServices) {}

  ngOnInit(): void {
    this.categorieService
      .getCategories()
      .subscribe((categorie: QueryResCategorie) => {
        this.categorieRes = categorie;
      });
  }
}
