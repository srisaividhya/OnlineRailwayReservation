import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrainListComponent } from './train-list/train-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSliderComponent,
    NavbarComponent,
    TrainListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
