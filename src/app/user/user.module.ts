import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SavedCitiesComponent } from './saved-cities/saved-cities.component';
import { NgxAuthFirebaseUIModule } from 'ng7-auth';
import { MaterialModule } from '../shared/material.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    MaterialModule,
    NgxAuthFirebaseUIModule
  ],
  declarations: [LoginComponent, SavedCitiesComponent, ProfileComponent]
})
export class UserModule { }
