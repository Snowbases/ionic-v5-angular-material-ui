import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { MaterialDesignModule } from "../../shared/material-design/material-design.module";
import { ProgressBarExamplePageRoutingModule } from "./progress-bar-example-routing.module";
import { ProgressBarExamplePage } from "./progress-bar-example.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarExamplePageRoutingModule,
    MaterialDesignModule
  ],
  declarations: [ProgressBarExamplePage]
})
export class ProgressBarExamplePageModule { }
