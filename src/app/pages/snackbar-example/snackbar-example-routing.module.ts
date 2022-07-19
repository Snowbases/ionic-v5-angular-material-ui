import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SnackbarExamplePage } from './snackbar-example.page';

const routes: Routes = [
  {
    path: '',
    component: SnackbarExamplePage
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
export class SnackbarExamplePageRoutingModule {}
