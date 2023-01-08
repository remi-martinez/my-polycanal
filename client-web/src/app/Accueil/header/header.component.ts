import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  estAccueilActif = false;
  estEnDirectActif = false;
  estProgrammeTVActif = false;
  estChaineAppsActif = false;
  estVideosActif = false;
  //on récupère le chemin de la route active
  cheminActuel = this.route.snapshot.routeConfig?.path;
  //pour animation recherche
  showRechercheDiv = false;


  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Définissions de la variable appropriée en fonction de la page active
    // @ts-ignore
    if (this.estSurAccueil()) {
      this.estAccueilActif = true;
    }
  }

  rechercheDepliante(){
    this.showRechercheDiv = !this.showRechercheDiv;
  }

  goAjoutProfil(){
    this.router.navigateByUrl('ajoutProfil')
  }

}
