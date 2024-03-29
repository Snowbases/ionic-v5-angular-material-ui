import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardExamplePage } from './card-example.page';

const routes: Routes = [
  {
    path: '',
    component: CardExamplePage
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
export class CardExamplePageRoutingModule {}
