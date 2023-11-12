import { Component } from '@angular/core';
import { CategoriesServices } from 'src/app/categories/categories.services';
import { QueryResCategorie } from 'src/app/interfaces/QueryResCategorie';
import { GamesServices } from '../games.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-post',
  templateUrl: './games-post.component.html',
  styleUrls: ['./games-post.component.css'],
})
export class GamesPostComponent {
  postGameForm: FormGroup;

  constructor(
    private categorieService: CategoriesServices,
    private gamesService: GamesServices,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.postGameForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      addedDate: ['', Validators.required],
      plateform: ['', Validators.required],
      categorie: ['', Validators.required],
    });
  }

  selectedId = '';

  categorieRes: QueryResCategorie = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };

  data = {
    title: '',
    desc: '',
    addedDate: '',
    plateform: '',
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
    this.data = {
      title: this.postGameForm.value.title,
      desc: this.postGameForm.value.desc,
      addedDate: moment().format('YYYY-MM-DD'),
      plateform: this.postGameForm.value.plateform,
      categorie: this.selectedId,
    };

    try {
      this.gamesService.createGame(this.data).subscribe(
        (response: any) => {
          console.log('Post created successfully.');
          console.log(response);
          let currentUrl = this.router.url;
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([currentUrl]);
            });
        },
        (error: any) => {
          console.log('Error:', error);
          this.snackBar.open(
            'Something wrong happened, please try again',
            'Undo',
            {
              duration: 4000,
            }
          );
        }
      );
    } catch (err) {
      console.error(err);
    }
  }
}
