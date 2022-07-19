import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

import { CheckboxExamplePageRoutingModule } from './checkbox-example-routing.module';
import { CheckboxExamplePage } from './checkbox-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxExamplePageRoutingModule,
    AngularMaterialModule
  ],
  declarations: [
    CheckboxExamplePage
  ]
})
export class CheckboxExamplePageModule {}
