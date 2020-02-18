import {Injectable} from '@angular/core';
import {BaseApiService} from '../@core/api/shared/base-api.service';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {IMovies} from './interfaces/movies.interface';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private baseApiService: BaseApiService,
                private http: HttpClient) {
    }

    getMovies(): Observable<IMovies[]> {
        return this.baseApiService.get('top-movies.json');
    }

    addFavorite(movie: IMovies) {
        const movies = JSON.parse(localStorage.getItem('movies'));
        const moviesList = movies ? movies.concat(movie) : [movie];
        localStorage.setItem('movies', JSON.stringify(moviesList));
    }

    removeFavorite(movie: IMovies) {
        const movies = JSON.parse(localStorage.getItem('movies'));
        const moviesList = movies.filter((item: IMovies) => item.idIMDB !== movie.idIMDB);
        localStorage.setItem('movies', JSON.stringify(moviesList));
    }
}
