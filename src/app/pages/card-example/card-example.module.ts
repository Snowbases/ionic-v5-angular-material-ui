import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

import { CardExamplePageRoutingModule } from './card-example-routing.module';
import { CardExamplePage } from './card-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardExamplePageRoutingModule,
    AngularMaterialModule
  ],
  declarations: [
    CardExamplePage
  ]
})
export class CardExamplePageModule {}
