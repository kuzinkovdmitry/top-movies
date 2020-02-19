import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IMovies} from '../../home/interfaces/movies.interface';
import {HomeService} from '../../home/home.service';

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.page.html',
    styleUrls: ['./favorite.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritePage implements OnInit {
    favoriteMovies!: IMovies[];

    constructor(private homeService: HomeService,
                private cdRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.getFavoriteMovies();
    }

    removeFavoriteMovie(movie: IMovies) {
        this.homeService.removeFavorite(movie);
        this.favoriteMovies = this.favoriteMovies.filter((item: IMovies) => item.idIMDB !== movie.idIMDB);
        this.cdRef.detectChanges();
    }

    getFavoriteMovies() {
        this.favoriteMovies = JSON.parse(localStorage.getItem('movies'));
        this.cdRef.detectChanges();
    }
}
