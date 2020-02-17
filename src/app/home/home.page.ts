import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getMovies().subscribe(data => console.log(data));
  }
}
