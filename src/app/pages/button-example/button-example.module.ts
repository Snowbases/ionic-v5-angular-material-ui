import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MaterialDesignModule } from '../../shared/material-design/material-design.module';
import { ButtonExamplePageRoutingModule } from './button-example-routing.module';
import { ButtonExamplePage } from './button-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonExamplePageRoutingModule,
    MaterialDesignModule
  ],
  declarations: [ButtonExamplePage]
})
export class ButtonExamplePageModule { }
