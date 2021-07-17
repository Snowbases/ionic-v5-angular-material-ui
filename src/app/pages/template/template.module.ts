import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { MaterialDesignModule } from "../../shared/material-design/material-design.module";
import { TemplatePageRoutingModule } from "./template-routing.module";
import { TemplatePage } from "./template.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplatePageRoutingModule,
    MaterialDesignModule
  ],
  declarations: [TemplatePage]
})
export class TemplatePageModule {}
