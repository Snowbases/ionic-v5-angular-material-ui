import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MaterialDesignModule } from '../../../shared/material-design/material-design.module';
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
    MaterialDesignModule
  ],
  exports: [
    DialogDataExampleComponent,
    DialogDataExampleDialogComponent
  ]
})
export class DialogDataExampleModule { }
