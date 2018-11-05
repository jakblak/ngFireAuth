import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { WeatherData } from '../shared/interfaces/weather-data';
import { Weather } from '../shared/interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private FORECAST = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
  private KEY = '<YOUR_WEATHER_API_KEY_HERE>';
  private IMP = '&units=imperial';

  constructor(private http: HttpClient) { }

  searchWeatherData(cityName: string): Observable<Weather> {
    return this
              .http
              .get<WeatherData>(`${this.URL}${cityName}&APPID=${this.KEY}${this.IMP}`)
              .pipe(
                map(data => this.transformWeatherData(data)),
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
              );
  }

  getForcast(cityName: string): Observable<any> {
    return this
              .http
              .get(`${this.FORECAST}${cityName}&APPID=${this.KEY}${this.IMP}&cnt=7`)
              .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
              );
  }

  private transformWeatherData(data: WeatherData): Weather {
    return {
      name: data.name,
      country: data.sys.country,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      description: data.weather[0].description,
      temperature: data.main.temp,
      lat: data.coord.lat,
      lon: data.coord.lon
    };
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res);
    return throwError(res.error || 'Server error');
  }
}
// http://api.openweathermap.org/data/2.5/forecast/daily?q=tampa&APPID=16b0f73c6b8a9412f74b1b56a485e456&units=imperial&cnt=7
