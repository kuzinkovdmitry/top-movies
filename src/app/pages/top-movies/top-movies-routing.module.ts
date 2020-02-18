import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopMoviesPage } from './top-movies.page';

const routes: Routes = [
  {
    path: '',
    component: TopMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopMoviesPageRoutingModule {}
