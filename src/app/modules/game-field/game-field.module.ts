import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameCharacterModule } from 'src/app/shared/modules/game-character/game-character.module';
import { GameFieldComponent } from './components/game-field/game-field.component';

@NgModule({
    declarations: [GameFieldComponent],
    imports: [CommonModule, GameCharacterModule],
    exports: [GameFieldComponent]
}) export class GameFieldModule { }