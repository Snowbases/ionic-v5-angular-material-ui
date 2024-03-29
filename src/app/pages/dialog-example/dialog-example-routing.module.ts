import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DialogExamplePage } from './dialog-example.page';

const routes: Routes = [
  {
    path: '',
    component: DialogExamplePage
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
export class DialogExamplePageRoutingModule {}
