import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.scss']
})
export class ModifierProfilComponent {
  constructor(private router: Router) { }

  nom!:string;
  adresseMail!: string;
  password!: string;
  confirmPassword!: string;

  goProfils() {
    this.router.navigateByUrl('gestionProfils');
  }

  allFieldsEntered(): boolean {
    return !(!(this.nom)) && !(!this.password) && !(!this.adresseMail) && !(!this.confirmPassword);
  }


}
