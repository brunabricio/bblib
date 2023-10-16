import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularLibModule } from '@brunabricio/angular-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
