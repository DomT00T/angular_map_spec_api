import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewslistComponent } from './components/newslist/newslist.component';
 

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, } from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,
    NewslistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
