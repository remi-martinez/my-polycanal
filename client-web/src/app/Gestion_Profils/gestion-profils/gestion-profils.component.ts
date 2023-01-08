import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-gestion-profils',
  templateUrl: './gestion-profils.component.html',
  styleUrls: ['./gestion-profils.component.scss']
})
export class GestionProfilsComponent {

  constructor(private router: Router) { }

  goModifierProfil() {
    this.router.navigateByUrl('modifierProfil');
  }

  goAjoutProfil(){
    this.router.navigateByUrl('ajoutProfil');
  }
}
