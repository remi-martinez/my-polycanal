import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-gestion-profils',
  templateUrl: './gestion-profils.component.html',
  styleUrls: ['./gestion-profils.component.scss']
})
export class GestionProfilsComponent {

  utilisateur: Utilisateur | undefined;
  constructor(private router: Router, public authService: AuthService) {
    this.utilisateur = this.authService.getCurrentUser();
  }

  goModifierProfil() {
    this.router.navigateByUrl('modifierProfil');
  }

  goAjoutProfil(){
    this.router.navigateByUrl('ajoutProfil');
  }
}
