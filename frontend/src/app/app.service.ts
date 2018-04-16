import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {promise} from "selenium-webdriver";
import {Observable} from "rxjs/Observable";
import {PromiseObservable} from "rxjs/observable/PromiseObservable";

@Injectable()
export class WeatherForecastService {
  constructor (
    private http: HttpClient
  ) {}

  getForecast(id: number): Observable<Object> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=515fe162ca34547fcfc9cc438828f8fe`);
  }

  getDetailForecast(selectedId: number): Observable<Object> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${selectedId}&APPID=515fe162ca34547fcfc9cc438828f8fe`);
  }
}
