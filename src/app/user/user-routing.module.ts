import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SavedCitiesComponent } from './saved-cities/saved-cities.component';
import { ProfileComponent } from './profile/profile.component';
import { CityResolver } from './city-resolver.service';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'cities/:id',
  component: SavedCitiesComponent
  // resolve: { cities: CityResolver }
}, {
  path: 'profile',
  component: ProfileComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CityResolver]
})
export class UserRoutingModule { }
