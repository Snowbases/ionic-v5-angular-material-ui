import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BottomSheetExamplePage } from './bottom-sheet-example.page';

const routes: Routes = [
  {
    path: '',
    component: BottomSheetExamplePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BottomSheetExamplePageRoutingModule {}
