import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmltopdfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
