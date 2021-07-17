import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

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
    path: 'button-example',
    loadChildren: () => import('./pages/button-example/button-example.module').then(m => m.ButtonExamplePageModule)
  },
  {
    path: 'snackbar-example',
    loadChildren: () => import('./pages/snackbar-example/snackbar-example.module').then(m => m.SnackbarExamplePageModule)
  },
  {
    path: 'dialog-example',
    loadChildren: () => import('./pages/dialog-example/dialog-example.module').then(m => m.DialogExamplePageModule)
  },
  {
    path: 'bottom-sheet-example',
    loadChildren: () => import('./pages/bottom-sheet-example/bottom-sheet-example.module').then(m => m.BottomSheetExamplePageModule)
  },
  {
    path: 'progress-bar-example',
    loadChildren: () => import('./pages/progress-bar-example/progress-bar-example.module').then(m => m.ProgressBarExamplePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
