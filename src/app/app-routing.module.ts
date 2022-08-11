import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameFieldModule } from './modules/game-field/game-field.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game-field',
    pathMatch: 'full'
  },
  {
    path: 'game-field',
    loadChildren:() => import('./modules/game-field/game-field-routing.module').then(m => m.GameFieldRouterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
