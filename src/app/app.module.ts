import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantBasicInfoComponent } from './components/restaurants/restaurant-basic-info/restaurant-basic-info.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RestaurantDetailInfoComponent } from './components/restaurants/restaurant-detail-info/restaurant-detail-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RestaurantBasicInfoComponent,
    RestaurantDetailInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
