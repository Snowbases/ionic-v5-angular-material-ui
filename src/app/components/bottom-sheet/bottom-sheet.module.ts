import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BottomSheetOverviewExampleModule } from './bottom-sheet-overview-example/bottom-sheet-overview-example.module';

@NgModule({
  exports: [
    BottomSheetOverviewExampleModule
  ]
})
export class BottomSheetModule { }
