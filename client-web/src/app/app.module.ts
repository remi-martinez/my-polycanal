import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import { HeaderComponent } from './Accueil/header/header.component';
import { GrandCarouselComponent } from './Accueil/grand-carousel/grand-carousel.component';
import {IvyCarouselModule} from "angular-responsive-carousel";
import { CarouselTypeComponent } from './Accueil/carousel-type/carousel-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GrandCarouselComponent,
    CarouselTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
