import { NgModule } from '@angular/core';

import { DialogContentExampleModule } from './dialog-content-example/dialog-content-example.module';
import { DialogDataExampleModule } from './dialog-data-example/dialog-data-example.module';
import { DialogElementsExampleModule } from './dialog-elements-example/dialog-elements-example.module';
import { DialogFromMenuExampleModule } from './dialog-from-menu-example/dialog-from-menu-example.module';
import { DialogOverviewExampleModule } from './dialog-overview-example/dialog-overview-example.module';

@NgModule({
  exports: [
    DialogContentExampleModule,
    DialogDataExampleModule,
    DialogElementsExampleModule,
    DialogFromMenuExampleModule,
    DialogOverviewExampleModule
  ]
})
export class DialogModule {}
