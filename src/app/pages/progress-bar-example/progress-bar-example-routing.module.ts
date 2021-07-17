import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressBarExamplePage } from './progress-bar-example.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressBarExamplePageRoutingModule {}
