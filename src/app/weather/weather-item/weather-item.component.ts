import { Component, OnInit } from '@angular/core';
import { Weather } from '../../shared/interfaces/weather';
import { WeatherDataService } from '../weather-data.service';
import { User } from '../../shared/interfaces/user';
import { UserAuthService } from '../../user/user-auth.service';
import { FirebaseService } from '../../shared/firebase.service';
import { City } from '../../shared/interfaces/city';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})

export class WeatherItemComponent implements OnInit {
  user$: User;
  get weather(): Weather {
    return this.weatherDataService.weather;
  }

  constructor(private weatherDataService: WeatherDataService,
              private firebaseService: FirebaseService,
              private snackBar: MatSnackBar,
              private userAuthService: UserAuthService) {
    this.userAuthService.user$.subscribe(user => this.user$ = user);
  }

  ngOnInit() {
  }

  addCity() {
    const city: City = {
      name: this.weather.name,
      country: this.weather.country,
      description: this.weather.description,
      temperature: this.weather.temperature,
      lat: this.weather.lat,
      lon: this.weather.lon
    };
    this.firebaseService
        .addCity(this.user$.uid, city)
        .then((res) => {
          this.snackBar.open(`Success! City saved`, 'OK', {
            duration: 5000
          });
        })
        .catch((err) => {
          console.log(err);
        });
  }
}
