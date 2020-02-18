import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesChartPageRoutingModule } from './movies-chart-routing.module';

import { MoviesChartPage } from './movies-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesChartPageRoutingModule
  ],
  declarations: [MoviesChartPage]
})
export class MoviesChartPageModule {}
