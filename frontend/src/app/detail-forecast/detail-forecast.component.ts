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

  weatherForecast = {};

  constructor(private route: ActivatedRoute,
              private detailForecastService: WeatherForecastService,
              private location: Location) {

      const selectedState = +this.route.snapshot.paramMap.get('state');
      this.detailForecastService.getDetailForecast(selectedState).subscribe(data => this.weatherForecast = data);

  }

  goBack(): void {
    this.location.back();
  }

}
