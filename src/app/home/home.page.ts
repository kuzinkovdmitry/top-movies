import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Observable} from 'rxjs';
import {IMovies} from './interfaces/movies.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
