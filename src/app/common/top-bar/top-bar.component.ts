import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/auth/auth.services';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  constructor(private router: Router, private authService: AuthServices) {}

  navigateToGames() {
    this.router.navigate(['/games']);
  }

  navigateToCategories() {
    this.router.navigate(['/categories']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
