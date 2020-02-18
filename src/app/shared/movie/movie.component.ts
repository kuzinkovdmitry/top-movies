import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {IMovies} from '../../home/interfaces/movies.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent {
  @Input() movie: IMovies;
  @Input() key: string;
  @Output() movieChanges = new EventEmitter();

  emitMovieAction(movie: IMovies) {
    this.movieChanges.emit(movie);
  }

  getIconName(movie: IMovies) {
    if (this.key === 'top-movies') {
      return movie.selected ? 'star' : 'star-outline';
    } else {
      return 'close-outline';
    }
  }

}
