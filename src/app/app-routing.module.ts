import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'button-overview-example',
    loadChildren: () => import('./pages/button-overview-example/button-overview-example.module').then(m => m.ButtonOverviewExamplePageModule)
  },
  {
    path: 'snackbar-example',
    loadChildren: () => import('./pages/snackbar-example/snackbar-example.module').then(m => m.SnackbarExamplePageModule)
  },
  {
    path: 'dialog-example',
    loadChildren: () => import('./pages/dialog-example/dialog-example.module').then(m => m.DialogExamplePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
