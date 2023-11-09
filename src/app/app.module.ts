import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { GamesServices } from './games/games.services';

import { MatTooltipModule } from '@angular/material/tooltip';
import { CategoriesComponent } from './categories/categories.component';
import { GamesViewComponent } from './games/games-view/games-view.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesPostComponent } from './games/games-post/games-post.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GamesViewTableComponent } from './games/games-view-table/games-view-table.component';
import { GamesComponent } from './games/games.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    GamesViewComponent,
    LoginFormComponent,
    GamesPostComponent,
    GamesViewTableComponent,
    GamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [GamesServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
