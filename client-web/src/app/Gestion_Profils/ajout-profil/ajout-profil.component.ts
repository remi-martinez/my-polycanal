import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-profil',
  templateUrl: './ajout-profil.component.html',
  styleUrls: ['./ajout-profil.component.scss']
})
export class AjoutProfilComponent {
  constructor(private router: Router) { }

  nom!:string;
  adresseMail!: string;
  password!: string;
  confirmPassword!: string;

  goMenu() {
    this.router.navigateByUrl('');
  }

  allFieldsEntered(): boolean {
    return !(!(this.nom)) && !(!this.password) && !(!this.adresseMail) && !(!this.confirmPassword);
  }


}
