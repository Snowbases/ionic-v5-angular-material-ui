import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MaterialDesignModule } from '../../shared/material-design/material-design.module';
import { SnackbarExamplePageRoutingModule } from './snackbar-example-routing.module';
import { SnackbarExamplePage } from './snackbar-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnackbarExamplePageRoutingModule,
    MaterialDesignModule
  ],
  declarations: [SnackbarExamplePage]
})
export class SnackbarExamplePageModule {}
