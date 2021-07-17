import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonExamplePage } from './button-example.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonExamplePageRoutingModule {}
