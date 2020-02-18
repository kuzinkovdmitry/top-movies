import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'favorite',
    loadChildren: './pages/favorite/favorite.module#FavoritePageModule'
  },
  {
    path: 'top-movies',
    loadChildren: './pages/top-movies/top-movies.module#TopMoviesPageModule'
  },
  {
    path: 'movies-chart',
    loadChildren: './pages/movies-chart/movies-chart.module#MoviesChartPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
