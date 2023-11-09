import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent {
  showCardsComponent: boolean = true;
  showTableComponent: boolean = false;

  showCards() {
    this.showTableComponent = false;
    this.showCardsComponent = true;
  }

  showTable() {
    this.showCardsComponent = false;
    this.showTableComponent = true;
  }
}
