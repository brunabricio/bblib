import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularLibModule } from '@brunabricio/angular-lib';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularLibModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
