import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ProgressBarExamplePageRoutingModule } from './progress-bar-example-routing.module';
import { ProgressBarExamplePage } from './progress-bar-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarExamplePageRoutingModule,
    AngularMaterialModule
  ],
  declarations: [
    ProgressBarExamplePage
  ]
})
export class ProgressBarExamplePageModule {}
