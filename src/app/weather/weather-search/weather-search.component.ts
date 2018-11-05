import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../../shared/interfaces/weather';
import { WeatherDataService } from '../weather-data.service';
import { MatSnackBar } from '@angular/material';
import { UserAuthService } from '../../user/user-auth.service';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  query = '';
  user$: User;
  errorMessage: any = {};

  constructor(private weatherService: WeatherService,
              private weatherDataService: WeatherDataService,
              private userAuthService: UserAuthService,
              public snackBar: MatSnackBar) {
                this.userAuthService
                    .user$
                    .subscribe(user => this.user$ = user);
              }

  ngOnInit() {
  }

  set weather(data: Weather) {
    this.weatherDataService.weather = data;
  }

  search() {
    this.weatherService.searchWeatherData(this.query)
        .subscribe(
          weather => this.weather = weather,
          error => this.errorMessage = <any>error,
          () => this.query = ''
        );
  }

}
