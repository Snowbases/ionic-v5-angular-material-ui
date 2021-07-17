import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BottomSheetModule } from './bottom-sheet/bottom-sheet.module';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  exports: [
    DialogModule,
    BottomSheetModule
  ]
})
export class ComponentsModule { }
