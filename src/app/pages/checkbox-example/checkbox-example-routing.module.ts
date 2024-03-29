import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckboxExamplePage } from './checkbox-example.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxExamplePage
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
export class CheckboxExamplePageRoutingModule {}
