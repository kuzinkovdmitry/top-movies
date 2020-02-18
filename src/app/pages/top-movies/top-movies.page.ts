import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Self} from '@angular/core';
import {HomeService} from '../../home/home.service';
import {IMovies} from '../../home/interfaces/movies.interface';
import {NgOnDestroy} from '../../@core/services/destroy.service';

@Component({
    selector: 'app-top-movies',
    templateUrl: './top-movies.page.html',
    styleUrls: ['./top-movies.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [NgOnDestroy]
})
export class TopMoviesPage implements OnInit {
    moviesList: IMovies[];

    constructor(private homeService: HomeService,
                private cdRef: ChangeDetectorRef,
                @Self() private onDestroy$: NgOnDestroy) {
    }

    ngOnInit() {
        this.getMoviesList();
    }

    getMoviesList() {
        this.homeService.getMovies().subscribe((data: IMovies[]) => {
            this.moviesList = this.initFavoriteState(data);
            this.cdRef.detectChanges();
        });
    }

    initFavoriteState(moviesList: IMovies[]) {
        const favoriteMovies = JSON.parse(localStorage.getItem('movies'));
        if (favoriteMovies) {
            return moviesList.map((movie: IMovies) => {
                const selectedMovie = favoriteMovies.find((favMovie: IMovies) => favMovie.idIMDB === movie.idIMDB);
                return selectedMovie ? selectedMovie : movie;
            });
        } else {
            return moviesList;
        }
    }

    toggleFavoriteState(movie: IMovies) {
        movie.selected ? this.removeMovieFromFavorite(movie) : this.addMovieToFavorite(movie);
    }

    transformObjToFavorite(movie: IMovies) {
        return {
            ...movie,
            selected: true
        };
    }

    addMovieToFavorite(movie: IMovies) {
        this.homeService.addFavorite(this.transformObjToFavorite(movie));
        this.moviesList = this.moviesList.map((item: IMovies) => {
            return item.idIMDB === movie.idIMDB ? this.transformObjToFavorite(item) : item;
        });
        this.cdRef.detectChanges();
    }

    removeMovieFromFavorite(movie: IMovies) {
        this.homeService.removeFavorite(movie);
        this.moviesList = this.moviesList.map((item: IMovies) => {
            if (item.idIMDB === movie.idIMDB) {
                return {
                    ...item,
                    selected: false
                };
            } else {
                return item;
            }
        });
        this.cdRef.detectChanges();
    }
}
