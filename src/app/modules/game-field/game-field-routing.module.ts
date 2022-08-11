import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { GameFieldComponent } from './components/game-field/game-field.component';

const routes: Routes = [
    {
        path: '',
        component: GameFieldComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) export class GameFieldRouterModule { }