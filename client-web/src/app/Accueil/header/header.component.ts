import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Définissions de la variable appropriée en fonction de la page active
    // @ts-ignore
    if (this.estSurAccueil()) {
      this.estAccueilActif = true;
    }
  }

  estSurAccueil() {
    return this.cheminActuel==='';
  }


}
