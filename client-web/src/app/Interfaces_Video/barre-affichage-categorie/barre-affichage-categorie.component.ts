import { Component } from '@angular/core';
import {FilmCategorieService} from "../../services/filmCategorie.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-barre-affichage-categorie',
  templateUrl: './barre-affichage-categorie.component.html',
  styleUrls: ['./barre-affichage-categorie.component.scss']
})
export class BarreAffichageCategorieComponent {
  codeCat: string|null = null;

  constructor(public filmCategorieService: FilmCategorieService, private route: ActivatedRoute) {
    this.codeCat = this.route.snapshot.queryParamMap.get('codeCat');
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.codeCat = paramMap.get('codeCat');
    });
  }

}
