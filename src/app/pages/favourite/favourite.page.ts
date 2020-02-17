import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouritePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
