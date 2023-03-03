import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.scss']
})
export class ModifierProfilComponent {

  nom!:string;
  password!: string;
  confirmPassword!: string;
  constructor(private router: Router, authService: AuthService) {
    this.nom = authService.getCurrentUser()?.login || '';

  }
  goProfils() {
    this.router.navigateByUrl('gestionProfils');
  }



}
