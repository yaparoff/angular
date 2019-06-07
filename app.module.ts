import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { My2Component } from './my2/my2.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    My2Component,
    CarsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
