import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { City } from '../shared/interfaces/city';
import { FirebaseService } from '../shared/firebase.service';
import { Observable } from 'rxjs';
import { map, tap, first, take } from 'rxjs/operators';

@Injectable()
export class CityResolver implements Resolve<any> {

  constructor(private firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.params['id'];
    // return this.firebaseService.getUserCities(id);
    return this.firebaseService.getUserCities(id)
    .pipe(
      map(data => data,
      take(1)
    ));
  }
}
