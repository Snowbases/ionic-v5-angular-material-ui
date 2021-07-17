import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardExamplePageRoutingModule } from './card-example-routing.module';

import { CardExamplePage } from './card-example.page';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardExamplePageRoutingModule,
    MaterialDesignModule
  ],
  declarations: [CardExamplePage]
})
export class CardExamplePageModule {}
