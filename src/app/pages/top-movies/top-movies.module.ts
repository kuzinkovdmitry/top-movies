import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopMoviesPageRoutingModule } from './top-movies-routing.module';

import { TopMoviesPage } from './top-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopMoviesPageRoutingModule
  ],
  declarations: [TopMoviesPage]
})
export class TopMoviesPageModule {}
