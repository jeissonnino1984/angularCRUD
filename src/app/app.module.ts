import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientComponent } from './http-client/http-client.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    HttpClientComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
