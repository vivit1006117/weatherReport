import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/publishReplay";

@Injectable()
export class WeatherForecastService {
  private forecast = new Map();
  private forecastDetails = new Map();
  constructor (
    private http: HttpClient
  ) {}

  getForecast(id: number): Observable<Object> {
    if (!this.forecast[id]) {
      this.forecast[id] = this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=515fe162ca34547fcfc9cc438828f8fe`)
        .publishReplay(1)
        .refCount();
    }
    return this.forecast[id];
  }

  getDetailForecast(selectedId: number): Observable<Object> {
    if (!this.forecastDetails[selectedId]) {
      this.forecastDetails[selectedId] = this.http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${selectedId}&APPID=515fe162ca34547fcfc9cc438828f8fe`)
        .publishReplay(1)
        .refCount();
    }
    return this.forecastDetails[selectedId];
  }
}
