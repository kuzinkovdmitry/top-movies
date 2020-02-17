import { Injectable } from '@angular/core';
import {BaseApiService} from '../@core/api/shared/base-api.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private baseApiService: BaseApiService,
              private http: HttpClient) { }

  getMovies() {
    return this.baseApiService.get('top-movies.json');
  }

  getTrailer() {
    return this.http.get('http://www.myapifilms.com/trailerAddict/taapi?token=dd53ba8a-932d-494b-bc44-fa4f4c8295e7&count=8&credit=1&format=json&film=Inception');
  }
}
