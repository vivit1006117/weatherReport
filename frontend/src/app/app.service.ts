import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherForecastService {
  constructor (
    private http: HttpClient
  ) {}

  getForecast() {
    return this.http.get(`https://hn.algolia.com/api/v1/search_by_date?query=nodejs&tags=story`);
  }

  getDetailForecast(selectedState: string) {
    return this.http.get(`https://hn.algolia.com/api/v1/search_by_date?query=nodejs&tags=story`);
  }
}
