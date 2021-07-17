import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { DialogExamplePageRoutingModule } from './dialog-example-routing.module';
import { DialogExamplePage } from './dialog-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogExamplePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DialogExamplePage]
})
export class DialogExamplePageModule { }
