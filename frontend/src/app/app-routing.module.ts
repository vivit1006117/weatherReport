import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailForecastComponent} from "./detail-forecast/detail-forecast.component";
import {WeatherForecastComponent} from "./weather-forecast/weather-forecast.component";

const routes: Routes = [
  { path: '', redirectTo: '/forecast', pathMatch: 'full'},
  { path: 'forecast', component: WeatherForecastComponent },
  { path: 'detail/:state', component: DetailForecastComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
