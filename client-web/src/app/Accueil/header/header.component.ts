import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {Utilisateur} from "../../models/utilisateur";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public connectedUtilisateur: Utilisateur | undefined;
  estAccueilActif = false;
  estEnDirectActif = false;
  estProgrammeTVActif = false;
  estChaineAppsActif = false;
  estVideosActif = false;
  //on récupère le chemin de la route active
  cheminActuel = this.route.snapshot.routeConfig?.path;
  //pour animation recherche
  showRechercheDiv = false;


  constructor(private route: ActivatedRoute,
              private router: Router,
              public authService: AuthService) {
  }

  ngOnInit() {
    // Définissions de la variable appropriée en fonction de la page active
    // @ts-ignore
    this.estAccueilActif = true;
    this.authService.getCurrentUser().subscribe(
      value => {
        this.connectedUtilisateur = value;
      }
    )

  }

  rechercheDepliante() {
    this.showRechercheDiv = !this.showRechercheDiv;
  }

  goAjoutProfil() {
    this.router.navigateByUrl('ajoutProfil')
  }

  goGestionProfils() {
    this.router.navigateByUrl('gestionProfils')
  }

  managerConnexion() {
    if (localStorage.getItem('connectedUser')) {
      this.authService.logout();
    }
    this.router.navigateByUrl('connexion');
  }
}
