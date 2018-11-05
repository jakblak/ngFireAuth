import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user$: Observable<User | null>;

  constructor(private router: Router,
              private snackBar: MatSnackBar,
              public afAuth: AngularFireAuth) {
                this.user$ = this.afAuth.authState;
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.snackBar.open(`You've Signed Out`, 'OK', {
        duration: 5000
      });
      this.router.navigate(['/weather']);
   });
  }

}
