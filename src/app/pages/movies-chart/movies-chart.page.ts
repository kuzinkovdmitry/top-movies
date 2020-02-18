import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movies-chart',
  templateUrl: './movies-chart.page.html',
  styleUrls: ['./movies-chart.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesChartPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
