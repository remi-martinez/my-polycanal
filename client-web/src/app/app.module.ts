import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from "./app.component";
import {HeaderComponent} from './Accueil/header/header.component';
import {GrandCarouselComponent} from './Accueil/grand-carousel/grand-carousel.component';
import {IvyCarouselModule} from "angular-responsive-carousel";
import {CarouselTypeComponent} from './Accueil/carousel-type/carousel-type.component';
import {TableauGestionComponent} from './Gestion_Video/tableau-gestion/tableau-gestion.component';
import {AjoutVideoComponent} from './Gestion_Video/ajout-video/ajout-video.component';
import {ModifVideoComponent} from './Gestion_Video/modif-video/modif-video.component';
import {
  BarreAffichageCategorieComponent
} from './Interfaces_Video/barre-affichage-categorie/barre-affichage-categorie.component';
import {VideosComponent} from './Interfaces_Video/videos/videos.component';
import {
  BarreAffichageActeurRealisateurComponent
} from './Interfaces_Video/barre-affichage-acteur-realisateur/barre-affichage-acteur-realisateur.component';
import {AjoutProfilComponent} from './Gestion_Profils/ajout-profil/ajout-profil.component';
import {GestionProfilsComponent} from './Gestion_Profils/gestion-profils/gestion-profils.component';
import {ModifierProfilComponent} from './Gestion_Profils/modifier-profil/modifier-profil.component';
import {PageIntrouvableComponent} from './Erreurs/page-introuvable/page-introuvable.component';
import {ConnexionComponent} from './Connexion_inscription/connexion/connexion.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpRequestInterceptor} from "./http-request-interceptor";
import {HomeComponent} from "./Accueil/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AjoutPersonnageComponent} from "./Personnages/ajout-personnage/ajout-personnage.component";
import {ActeursComponent} from "./Acteurs/acteurs.component";
import {PersonnageComponent} from "./Personnages/personnage.component";
import {RechercheComponent} from "./Recherche/recherche.component";
import {AjoutActeurComponent} from "./Acteurs/ajout-acteur/ajout-acteur.component";
import {RealisateursComponent} from "./Realisateurs/realisateurs.component";
import {AjoutRealisateurComponent} from "./Realisateurs/ajout-realisateur/ajout-realisateur.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GrandCarouselComponent,
    CarouselTypeComponent,
    TableauGestionComponent,
    AjoutVideoComponent,
    ModifVideoComponent,
    BarreAffichageCategorieComponent,
    VideosComponent,
    BarreAffichageActeurRealisateurComponent,
    AjoutProfilComponent,
    GestionProfilsComponent,
    ModifierProfilComponent,
    PageIntrouvableComponent,
    ConnexionComponent,
    HomeComponent,
    ActeursComponent,
    AjoutPersonnageComponent,
    PersonnageComponent,
    RechercheComponent,
    AjoutActeurComponent,
    RealisateursComponent,
    AjoutRealisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule {
}
