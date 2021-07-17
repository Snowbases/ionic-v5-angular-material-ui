import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MaterialDesignModule } from '../../../shared/material-design/material-design.module';
import { DialogFromMenuExampleDialogComponent } from './dialog-from-menu-example-dialog/dialog-from-menu-example-dialog.component';
import { DialogFromMenuExampleComponent } from './dialog-from-menu-example.component';

@NgModule({
  declarations: [
    DialogFromMenuExampleComponent,
    DialogFromMenuExampleDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialDesignModule
  ],
  exports: [
    DialogFromMenuExampleComponent,
    DialogFromMenuExampleDialogComponent
  ]
})
export class DialogFromMenuExampleModule { }
