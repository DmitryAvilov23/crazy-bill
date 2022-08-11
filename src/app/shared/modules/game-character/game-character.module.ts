import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameCharacterComponent } from "./components/game-character/game-character.component";

@NgModule({
  declarations: [
    GameCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GameCharacterComponent]
}) export class GameCharacterModule { }