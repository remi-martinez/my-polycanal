import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./Accueil/header/header.component";
import {GrandCarouselComponent} from "./Accueil/grand-carousel/grand-carousel.component";
import {CarouselTypeComponent} from "./Accueil/carousel-type/carousel-type.component";

const routes: Routes = [{path:'', component:HeaderComponent},{path:'', component:GrandCarouselComponent},{path:'', component:CarouselTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
