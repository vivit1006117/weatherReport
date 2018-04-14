import { Component } from '@angular/core';
import { WeatherForecastService } from '../app.service';

@Component({
  selector: 'weather-forecast-component',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})

export class WeatherForecastComponent {
  news = {};
  weatherForecast = {
    "forecasts": [
      {
        "state": "Bengaluru"
      },
      {
        "state": "New Delhi"
      },
      {
        "state": "Mumbai"
      },
      {
        "state": "Kolkata"
      }
    ]
  };

  constructor(private WeatherForecastService: WeatherForecastService) {
    this.WeatherForecastService.getForecast().subscribe(data => this.news = data);
  }
}
