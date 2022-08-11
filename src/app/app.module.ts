import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameFieldModule } from './modules/game-field/game-field.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
