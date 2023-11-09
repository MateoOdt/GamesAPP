import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { CategoriesComponent } from './categories/categories.component';
import { GamesViewComponent } from './games/games-view/games-view.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'games', component: GamesViewComponent },
  { path: 'categories', component: CategoriesComponent },
  ///{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
