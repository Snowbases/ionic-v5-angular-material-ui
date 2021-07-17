import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MaterialDesignModule } from '../../../shared/material-design/material-design.module';
import { BottomSheetOverviewExampleSheetComponent } from './bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
import { BottomSheetOverviewExampleComponent } from './bottom-sheet-overview-example.component';

@NgModule({
  declarations: [
    BottomSheetOverviewExampleComponent,
    BottomSheetOverviewExampleSheetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialDesignModule
  ],
  exports: [
    BottomSheetOverviewExampleComponent,
    BottomSheetOverviewExampleSheetComponent
  ]
})
export class BottomSheetOverviewExampleModule { }
