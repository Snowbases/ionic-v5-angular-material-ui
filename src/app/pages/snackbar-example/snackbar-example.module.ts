import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { SnackbarExamplePageRoutingModule } from './snackbar-example-routing.module';
import { SnackbarExamplePage } from './snackbar-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnackbarExamplePageRoutingModule,
    AngularMaterialModule
  ],
  declarations: [
    SnackbarExamplePage
  ]
})
export class SnackbarExamplePageModule {}
