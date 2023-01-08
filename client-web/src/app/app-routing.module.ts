import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./Accueil/header/header.component";
import {GrandCarouselComponent} from "./Accueil/grand-carousel/grand-carousel.component";
import {CarouselTypeComponent} from "./Accueil/carousel-type/carousel-type.component";
import {TableauGestionComponent} from "./Gestion_Video/tableau-gestion/tableau-gestion.component";
import {AjoutVideoComponent} from "./Gestion_Video/ajout-video/ajout-video.component";
import {ModifVideoComponent} from "./Gestion_Video/modif-video/modif-video.component";
import {VideosFavoritesComponent} from "./Interfaces_Video/videos-favorites/videos-favorites.component";
import {BarreAffichageCategorieComponent} from "./Interfaces_Video/barre-affichage-categorie/barre-affichage-categorie.component";
import {VideosComponent} from "./Interfaces_Video/videos/videos.component";
import {BarreAffichageActeurRealisateurComponent} from "./Interfaces_Video/barre-affichage-acteur-realisateur/barre-affichage-acteur-realisateur.component";
import {AjoutProfilComponent} from "./Gestion_Profils/ajout-profil/ajout-profil.component";
import {GestionProfilsComponent} from "./Gestion_Profils/gestion-profils/gestion-profils.component";
import {ModifierProfilComponent} from "./Gestion_Profils/modifier-profil/modifier-profil.component";
import {ConnexionComponent} from "./Connexion_inscription/connexion/connexion.component";

const routes: Routes = [{path:'', component:GrandCarouselComponent},{path:'', component:CarouselTypeComponent},
  {path:'gestionVideo',component:TableauGestionComponent},
  {path:'ajoutVideo',component:AjoutVideoComponent},
  {path:'modifVideo', component:ModifVideoComponent},
  {path:'videoFav',component:VideosFavoritesComponent},
  {path:'categories', component:BarreAffichageCategorieComponent},{path:'categories', component:VideosComponent},
  {path:'personnalite', component:BarreAffichageActeurRealisateurComponent},{path:'personnalite', component:VideosComponent},
  {path:'ajoutProfil', component:AjoutProfilComponent},
  {path:'gestionProfils', component:GestionProfilsComponent},
  {path:'modifierProfil', component:ModifierProfilComponent},
  {path:'connexion', component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
