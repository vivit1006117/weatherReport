import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherForecastService } from './app.service';
import { DetailForecastComponent } from './detail-forecast/detail-forecast.component';
import { AppRoutingModule } from './app-routing.module';
import {WeatherForecastComponent} from "./weather-forecast/weather-forecast.component";

@NgModule({
  declarations: [
    AppComponent,
    DetailForecastComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WeatherForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
