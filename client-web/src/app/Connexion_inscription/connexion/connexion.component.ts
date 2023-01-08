import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  constructor(private router: Router) { }

  adresseMail!: string;
  password!: string;

  goMenu() {
    this.router.navigateByUrl('');
  }

  goAjoutProfil(){
    this.router.navigateByUrl('ajoutProfil')
  }

  allFieldsEntered(): boolean {
    return !(!this.password) && !(!this.adresseMail) ;
  }

}
