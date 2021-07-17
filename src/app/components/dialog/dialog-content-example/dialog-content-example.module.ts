import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MaterialDesignModule } from '../../../shared/material-design/material-design.module';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import { DialogContentExampleComponent } from './dialog-content-example.component';

@NgModule({
  declarations: [
    DialogContentExampleComponent,
    DialogContentExampleDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialDesignModule
  ],
  exports: [
    DialogContentExampleComponent,
    DialogContentExampleDialogComponent
  ]
})
export class DialogContentExampleModule { }
