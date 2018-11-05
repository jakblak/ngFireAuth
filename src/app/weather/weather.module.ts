import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { NgxAuthFirebaseUIModule } from 'ng7-auth';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    NgxAuthFirebaseUIModule,
    WeatherRoutingModule
  ],
  exports: [WeatherViewComponent, WeatherSearchComponent, WeatherItemComponent],
  declarations: [WeatherItemComponent, WeatherSearchComponent, WeatherViewComponent]
})
export class WeatherModule { }
