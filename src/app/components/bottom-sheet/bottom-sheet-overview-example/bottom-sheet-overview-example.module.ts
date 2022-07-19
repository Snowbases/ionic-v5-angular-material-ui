import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AngularMaterialModule } from '../../../shared/angular-material/angular-material.module';
import {
  BottomSheetOverviewExampleSheetComponent,
} from './bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
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
    AngularMaterialModule
  ],
  exports: [
    BottomSheetOverviewExampleComponent,
    BottomSheetOverviewExampleSheetComponent
  ]
})
export class BottomSheetOverviewExampleModule {}
