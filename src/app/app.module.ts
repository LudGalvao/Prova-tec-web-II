// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importe esta linha

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCatsComponent } from './lista-cats/lista-cats.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Adicione esta linha
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
