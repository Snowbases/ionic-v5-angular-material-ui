import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AngularMaterialModule } from '../../../shared/angular-material/angular-material.module';
import {
  DialogElementsExampleDialogComponent,
} from './dialog-elements-example-dialog/dialog-elements-example-dialog.component';
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
    AngularMaterialModule
  ],
  exports: [
    DialogElementsExampleComponent,
    DialogElementsExampleDialogComponent
  ]
})
export class DialogElementsExampleModule {}
