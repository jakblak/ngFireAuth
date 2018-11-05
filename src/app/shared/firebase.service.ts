import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { City } from './interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  cityCollection: AngularFirestoreCollection;
  cityDocument: AngularFirestoreDocument;
  userCollection: AngularFirestoreCollection = this.afs.collection('users');

  constructor(private afs: AngularFirestore) {
    // this.cityCollection = this.afs.collection('users').doc('FdprY1heCLfzXLWGCeIZLjR8PwK2').collection('cities');
  }

  getUserCities(userId: any): Observable<any[]> {
    console.log(userId);

    this.cityCollection = this.afs.collection(`users/${userId}/cities`, (ref) => ref.orderBy('time', 'desc'));
    console.log(this.cityCollection);

    return this.cityCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return { ...data };
      })),
      tap(data => console.log(JSON.stringify(data)))
    );
  }

  addCity(userId: string, weather: any) {
    const city = {
      weather,
      time: new Date()
    };
    return this.userCollection
                   .doc(userId)
                   .collection('cities')
                   .add(city);
  }

  getCity(userId: string, city: City) {
    return this.afs.doc(`users/${userId}/cities/${city}`);
  }

  deleteCity(userId: string, city: City) {
    return this.getCity(userId, city).delete();
  }

  updateCity(userId: string, city: City, weather) {
    const newCity = {
      weather,
      time: new Date()
    };
    return this.getCity(userId, city).set(newCity);
  }

}
