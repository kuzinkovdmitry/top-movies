import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../../home/home.service';
import {IMovies} from '../../home/interfaces/movies.interface';
import { Chart } from 'chart.js';
import {ISortedMovies} from './interfaces/sorted-movies.interface';
import {CHART_CONFIG} from './data/chart-config';

@Component({
  selector: 'app-movies-chart',
  templateUrl: './movies-chart.page.html',
  styleUrls: ['./movies-chart.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesChartPage implements OnInit {
  @ViewChild('barChart', {static: true}) barChart;

  sortedMoviesList!: ISortedMovies;
  baseChart;

  chartConfig = CHART_CONFIG;

  constructor(private homeService: HomeService,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getMovies();
  }

  createBarChart() {
    this.baseChart = new Chart(this.barChart.nativeElement, this.chartConfig);
  }

  getMovies() {
    this.homeService.getMovies().subscribe((movies: IMovies[]) => {
      this.sortedMoviesList = this.sortMoviesByDecade(movies);
      this.addDataToConfig();
      this.createBarChart();
      this.cdRef.detectChanges();
    });
  }

  sortMoviesByDecade(movies: IMovies[]) {
    const sortedMovies = [];
    movies.forEach((item: IMovies) => {
      const movieDecade = this.yearToDecade(parseInt(item.year, 0));
      if (!sortedMovies[movieDecade]) {
        sortedMovies[movieDecade] = [];
      }
      sortedMovies[movieDecade].push(item);
    });
    return sortedMovies;
  }

  addDataToConfig() {
    this.chartConfig.data.labels = this.getChartLabels();
    this.chartConfig.data.datasets[0].data = this.getChartData();
  }

  getChartLabels() {
    return Object.keys(this.sortedMoviesList).map((item: string) => `${item}'s`);
  }

  getChartData() {
    return Object.values(this.sortedMoviesList).map((item: IMovies[]) => item.length);
  }

  yearToDecade(movieYear: number) {
    return movieYear - (movieYear % 10);
  }
}
