import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "./Accueil/header/header.component";
import {GrandCarouselComponent} from "./Accueil/grand-carousel/grand-carousel.component";
import {CarouselTypeComponent} from "./Accueil/carousel-type/carousel-type.component";
import {TableauGestionComponent} from "./Gestion_Video/tableau-gestion/tableau-gestion.component";
import {AjoutVideoComponent} from "./Gestion_Video/ajout-video/ajout-video.component";
import {ModifVideoComponent} from "./Gestion_Video/modif-video/modif-video.component";
import {VideosFavoritesComponent} from "./Interfaces_Video/videos-favorites/videos-favorites.component";
import {
  BarreAffichageCategorieComponent
} from "./Interfaces_Video/barre-affichage-categorie/barre-affichage-categorie.component";
import {VideosComponent} from "./Interfaces_Video/videos/videos.component";
import {
  BarreAffichageActeurRealisateurComponent
} from "./Interfaces_Video/barre-affichage-acteur-realisateur/barre-affichage-acteur-realisateur.component";
import {AjoutProfilComponent} from "./Gestion_Profils/ajout-profil/ajout-profil.component";
import {GestionProfilsComponent} from "./Gestion_Profils/gestion-profils/gestion-profils.component";
import {ModifierProfilComponent} from "./Gestion_Profils/modifier-profil/modifier-profil.component";
import {ConnexionComponent} from "./Connexion_inscription/connexion/connexion.component";
import {HomeComponent} from "./Accueil/home.component";
import {ActeursComponent} from "./Acteurs/acteurs.component";
import {PersonnageComponent} from "./Personnages/personnage.component";
import {RechercheComponent} from "./Recherche/recherche.component";
import {AjoutPersonnageComponent} from "./Personnages/ajout-personnage/ajout-personnage.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent, canActivate: [AuthGuardService]
  },
  {path: 'gestionVideo', component: TableauGestionComponent, canActivate: [AuthGuardService]},
  {path: 'ajoutVideo', component: AjoutVideoComponent, canActivate: [AuthGuardService]},
  {path: 'modifVideo', component: ModifVideoComponent, canActivate: [AuthGuardService]},
  {path: 'personnages', component: PersonnageComponent, canActivate: [AuthGuardService]},
  {path: 'ajoutPersonnage', component: AjoutPersonnageComponent, canActivate: [AuthGuardService]},
  {path: 'categories', component: BarreAffichageCategorieComponent, canActivate: [AuthGuardService]},
  {path: 'categories', component: VideosComponent, canActivate: [AuthGuardService]},
  {path: 'acteurs', component: ActeursComponent, canActivate: [AuthGuardService]},
  {path: 'personnalite', component: BarreAffichageActeurRealisateurComponent, canActivate: [AuthGuardService]},
  {path: 'recherche', component: RechercheComponent, canActivate: [AuthGuardService]},
  {
    path: 'personnalite',
    component: VideosComponent, canActivate: [AuthGuardService]
  },
  {path: 'gestionProfils', component: GestionProfilsComponent, canActivate: [AuthGuardService]},
  {path: 'modifierProfil', component: ModifierProfilComponent, canActivate: [AuthGuardService]},
  //Route public
  {path: 'ajoutProfil', component: AjoutProfilComponent},
  {path: 'connexion', component: ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
