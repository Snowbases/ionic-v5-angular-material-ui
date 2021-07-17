import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonOverviewExamplePage } from './button-overview-example.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonOverviewExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonOverviewExamplePageRoutingModule {}
