import {Component, Input} from '@angular/core';
import {WeatherForecastService} from "../app.service";

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-detail-forecast',
  templateUrl: './detail-forecast.component.html',
  styleUrls: ['./detail-forecast.component.css']
})
export class DetailForecastComponent {

  news = {};
  weatherForecast = {
    "state": "Bengaluru",
    "forecasts": [
      {
        "date": "Bengaluru",
        "weather": "43degree"
      },
      {
        "date": "New Delhi",
        "weather": "43degree"
      },
      {
        "date": "Mumbai",
        "weather": "43degree"
      },
      {
        "date": "Kolkata",
        "weather": "43degree"
      }
    ]
  };

  constructor(private route: ActivatedRoute,
              private detailForecastService: WeatherForecastService,
              private location: Location) {

      const selectedState = this.route.snapshot.paramMap.get('state');
      this.detailForecastService.getDetailForecast(selectedState).subscribe(data => this.news = data);

  }

  goBack(): void {
    this.location.back();
  }

}
