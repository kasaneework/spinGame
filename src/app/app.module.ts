import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxWheelModule } from 'ngx-wheel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWheelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
