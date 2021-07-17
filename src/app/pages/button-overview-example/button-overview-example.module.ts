import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MaterialDesignModule } from '../../shared/material-design/material-design.module';
import { ButtonOverviewExamplePageRoutingModule } from './button-overview-example-routing.module';
import { ButtonOverviewExamplePage } from './button-overview-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonOverviewExamplePageRoutingModule,
    MaterialDesignModule
  ],
  declarations: [ButtonOverviewExamplePage]
})
export class ButtonOverviewExamplePageModule {}
