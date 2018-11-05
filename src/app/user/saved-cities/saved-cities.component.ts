import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../shared/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../../shared/interfaces/city';
import { database } from 'firebase';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css']
})
export class SavedCitiesComponent implements OnInit {
  cities: any = [];
  city: any = {};
  panelOpenState = false;
  updateForm = false;
  saveForm = true;
  userId = this.route.snapshot.paramMap.get('id');

  constructor(private firebaseService: FirebaseService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log(id);
      this.getCities(id);
    }
    // this.cities = this.route.snapshot.data['cities'];
    // this.cities = this.route.snapshot.data['cities'].data;

    // this.route.data.subscribe(data => {
    //     this.cities = data;
    //     console.log(data);
    // });
  }

  addCity() {
    this.firebaseService
        .addCity(this.userId, this.city);
        this.city = {};
  }

  deleteCity(city: City) {
    this.firebaseService
        .deleteCity(this.userId, city);
  }

  updateCity(city: any) {
    console.log(city);
    this.updateForm = true;
    this.saveForm = false;
    this.city.name = city.weather.name;
    this.city.description = city.weather.description;
    this.city.temperature = city.weather.temperature;
    this.city.id = city.id;
  }

  saveCityUpdate(newCity: City) {
    console.log(newCity);
    this.firebaseService
        .updateCity(this.userId, this.city.id, newCity);
        this.city = {};
        this.updateForm = false;
        this.saveForm = true;
  }

  getCities(id: string) {
    this.firebaseService
        .getUserCities(id)
        .subscribe(
          cities => {
            this.cities = cities;
            console.log(cities);
          }
    );
  }

  // async getCities(id: string) {
  //   try {
  //     const req = await this.firebaseService.getUserCities(id);
  //     req.subscribe(cities => { this.cities = cities, console.log(cities); });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
