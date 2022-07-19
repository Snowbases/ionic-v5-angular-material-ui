import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AngularMaterialModule } from '../../../shared/angular-material/angular-material.module';
import {
  DialogOverviewExampleDialogComponent,
} from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { DialogOverviewExampleComponent } from './dialog-overview-example.component';

@NgModule({
  declarations: [
    DialogOverviewExampleComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularMaterialModule
  ],
  exports: [
    DialogOverviewExampleComponent,
    DialogOverviewExampleDialogComponent
  ]
})
export class DialogOverviewExampleModule {}
