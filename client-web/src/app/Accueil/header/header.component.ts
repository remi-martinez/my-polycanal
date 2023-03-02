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
  value: string = '';
  showRechercheDiv = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public authService: AuthService) {
  }

  search(value: string) {
    this.router.navigate(['/recherche'], { queryParams: { value: value } });
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
