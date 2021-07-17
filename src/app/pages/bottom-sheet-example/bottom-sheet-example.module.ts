import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { BottomSheetExamplePageRoutingModule } from './bottom-sheet-example-routing.module';
import { BottomSheetExamplePage } from './bottom-sheet-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottomSheetExamplePageRoutingModule,
    ComponentsModule
  ],
  declarations: [BottomSheetExamplePage]
})
export class BottomSheetExamplePageModule { }
