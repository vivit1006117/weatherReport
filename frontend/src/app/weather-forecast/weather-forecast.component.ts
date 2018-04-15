import { Component } from '@angular/core';
import { WeatherForecastService } from '../app.service';

@Component({
  selector: 'weather-forecast-component',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})

export class WeatherForecastComponent {
  cityIds = [
    1277333,   //bangalore
    1275339,   //mumbai
    1261481,   //new Delhi
    1275004    //Kolkata
  ];
  weatherForecast = [];

  constructor(private WeatherForecastService: WeatherForecastService) {
    let count: number;
    for(count = 0; count < this.cityIds.length; count++) {
      this.WeatherForecastService.getForecast(this.cityIds[count]).subscribe(data => this.weatherForecast.push(data));
    }
  }
}
