import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./Accueil/header/header.component";
import {GrandCarouselComponent} from "./Accueil/grand-carousel/grand-carousel.component";
import {CarouselTypeComponent} from "./Accueil/carousel-type/carousel-type.component";
import {TableauGestionComponent} from "./Gestion_Video/tableau-gestion/tableau-gestion.component";

const routes: Routes = [{path:'', component:GrandCarouselComponent},{path:'', component:CarouselTypeComponent},
  {path:'gestionVideo',component:TableauGestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
