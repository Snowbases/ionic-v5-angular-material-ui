import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MaterialDesignModule } from '../../../shared/material-design/material-design.module';
import { DialogElementsExampleDialogComponent } from './dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { DialogElementsExampleComponent } from './dialog-elements-example.component';

@NgModule({
  declarations: [
    DialogElementsExampleComponent,
    DialogElementsExampleDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialDesignModule
  ],
  exports: [
    DialogElementsExampleComponent,
    DialogElementsExampleDialogComponent
  ]
})
export class DialogElementsExampleModule { }
