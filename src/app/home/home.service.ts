import { Injectable } from '@angular/core';
import {BaseApiService} from '../@core/api/shared/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private baseApiService: BaseApiService) { }

  getMovies() {
    return this.baseApiService.get('top-movies.json');
  }
}
