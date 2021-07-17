import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxExamplePageRoutingModule } from './checkbox-example-routing.module';

import { CheckboxExamplePage } from './checkbox-example.page';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxExamplePageRoutingModule,
    MaterialDesignModule
  ],
  declarations: [CheckboxExamplePage]
})
export class CheckboxExamplePageModule {}
