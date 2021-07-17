import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DialogContentExampleModule } from './dialog-content-example/dialog-content-example.module';
import { DialogDataExampleModule } from './dialog-data-example/dialog-data-example.module';
import { DialogElementsExampleModule } from './dialog-elements-example/dialog-elements-example.module';
import { DialogFromMenuExampleModule } from './dialog-from-menu-example/dialog-from-menu-example.module';
import { DialogOverviewExampleModule } from './dialog-overview-example/dialog-overview-example.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogContentExampleModule,
    DialogDataExampleModule,
    DialogElementsExampleModule,
    DialogFromMenuExampleModule,
    DialogOverviewExampleModule
  ],
  exports: [
    DialogContentExampleModule,
    DialogDataExampleModule,
    DialogElementsExampleModule,
    DialogFromMenuExampleModule,
    DialogOverviewExampleModule
  ]
})
export class DialogModule { }
