import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesChartPage } from './movies-chart.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesChartPageRoutingModule {}
