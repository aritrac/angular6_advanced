import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameMainComponent } from './game-main/game-main.component';
import { ShowEvenComponent } from './show-even/show-even.component';
import { ShowOddComponent } from './show-odd/show-odd.component';
import { ShowMainComponent } from './show-main/show-main.component';

@NgModule({
  declarations: [
    AppComponent,
    GameMainComponent,
    ShowEvenComponent,
    ShowOddComponent,
    ShowMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
