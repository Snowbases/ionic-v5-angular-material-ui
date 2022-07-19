import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AngularMaterialModule } from '../../../shared/angular-material/angular-material.module';
import { DialogDataExampleDialogComponent } from './dialog-data-example-dialog/dialog-data-example-dialog.component';
import { DialogDataExampleComponent } from './dialog-data-example.component';

@NgModule({
  declarations: [
    DialogDataExampleComponent,
    DialogDataExampleDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularMaterialModule
  ],
  exports: [
    DialogDataExampleComponent,
    DialogDataExampleDialogComponent
  ]
})
export class DialogDataExampleModule {}
