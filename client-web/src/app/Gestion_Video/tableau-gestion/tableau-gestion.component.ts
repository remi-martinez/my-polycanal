import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableau-gestion',
  templateUrl: './tableau-gestion.component.html',
  styleUrls: ['./tableau-gestion.component.scss']
})
export class TableauGestionComponent {

  constructor(private router: Router) { }

  ajoutFilm() {
    this.router.navigateByUrl('ajoutVideo');
  }

  modifFilm(){
    this.router.navigateByUrl('modifVideo');
  }
}
