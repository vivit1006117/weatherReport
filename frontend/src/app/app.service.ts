import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherForecastService {
  constructor (
    private http: HttpClient
  ) {}

  getForecast(id: number) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=515fe162ca34547fcfc9cc438828f8fe`);
  }

  getDetailForecast(selectedId: number) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${selectedId}&APPID=515fe162ca34547fcfc9cc438828f8fe`);
  }
}
