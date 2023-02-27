import { Component } from '@angular/core';
import {FilmCategorieService} from "../../services/filmCategorie.service";

@Component({
  selector: 'app-barre-affichage-categorie',
  templateUrl: './barre-affichage-categorie.component.html',
  styleUrls: ['./barre-affichage-categorie.component.scss']
})
export class BarreAffichageCategorieComponent {
  constructor(public filmCategorieService: FilmCategorieService) {

  }

}
