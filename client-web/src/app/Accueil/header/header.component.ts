import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {Utilisateur} from "../../models/utilisateur";
import {Observable} from "rxjs";
import {Personnage} from "../../models/personnage";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  connectedUtilisateur$: Observable<Utilisateur | undefined> | undefined;
  connectedUtilisateurObserver: any;
  connectedUtilisateur: Utilisateur | undefined;
  value: string = '';
  showRechercheDiv = false;
  showPopUpProfile = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.connectedUtilisateur$ = this.authService.getCurrentUserObservable();

    this.connectedUtilisateurObserver = {
      next: (u: Utilisateur) => {
        this.connectedUtilisateur = u;
        console.log(this.connectedUtilisateur)
      },
      error: (err: Error) => console.error("Error while fetching : " + err)
    }
    this.connectedUtilisateur$.subscribe(this.connectedUtilisateurObserver)
  }

  search(value: string) {
    this.router.navigate(['/recherche'], {queryParams: {value: value}});
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
