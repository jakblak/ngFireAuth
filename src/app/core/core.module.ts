import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from '../ui/menu/menu.component';
import { FirebaseModule } from './firebase.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    FirebaseModule  // because we use <router-outlet> and routerLink
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class CoreModule { }
