import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ButtonExamplePageRoutingModule } from './button-example-routing.module';
import { ButtonExamplePage } from './button-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonExamplePageRoutingModule,
    AngularMaterialModule
  ],
  declarations: [
    ButtonExamplePage
  ]
})
export class ButtonExamplePageModule {}
