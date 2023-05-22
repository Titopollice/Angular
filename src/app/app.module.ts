import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DadosPrincipaisComponent } from './dados-principais/dados-principais.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosPrincipaisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
