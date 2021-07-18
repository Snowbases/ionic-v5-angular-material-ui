import { NgModule } from "@angular/core";

import { BottomSheetModule } from "./bottom-sheet/bottom-sheet.module";
import { DialogModule } from "./dialog/dialog.module";

@NgModule({
  exports: [
    DialogModule,
    BottomSheetModule
  ]
})
export class ComponentsModule { }
