import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Realisateur} from "../../models/realisateur";
import {Categorie} from "../../models/categorie";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FilmService} from "../../services/film.service";
import {RealisateurService} from "../../services/realisateur.service";
import {CategorieService} from "../../services/categorie.service";

@Component({
  selector: 'app-ajout-video',
  template: `
    <h1>Ajouter un film</h1>
  <div class="form-class">
    <form [formGroup]="form">
      <div class="input-label-div">
        <label>Titre du film</label>
        <input type="text" name="titreFilm" placeholder="Titre du film..." [formControl]="form.controls.titre">
      </div>
      <div class="input-label-div">
        <label>Réalisateur</label>
        <select [formControl]="form.controls.noRea">
          <option *ngFor="let realisateur of realisateurs" [value]="realisateur.id">
            {{realisateur.prenRea + " " + realisateur.nomRea}}
          </option>
        </select>
      </div>
      <div class="input-label-div">
        <label>Catégorie</label>
        <select [formControl]="form.controls.codeCat">
          <option *ngFor="let categorie of categories" [value]="categorie.id">{{categorie.libelleCat}}</option>
        </select>
      </div>
      <div class="input-label-div">
        <label>Durée (min)</label>
        <input type="number" name="duree" placeholder="Durée (min)" [formControl]="form.controls.duree">
      </div>
      <div class="input-label-div">
        <label>Date de sortie</label>
        <input type="date" name="date" [formControl]="form.controls.dateSortie"
               min="1900-01-01" max="2023-12-31">
      </div>
      <div class="input-label-div">
        <label>Budget (€)</label>
        <input type="number" name="budget" placeholder="0000" [formControl]="form.controls.budget">
      </div>
      <div class="input-label-div">
        <label>Montant recette (€)</label>
        <input type="number" name="recette" placeholder="0000" [formControl]="form.controls.montantRecette">
      </div>
      <div class="input-label-div">
        <label>Lien image</label>
        <input type="text" name="lien_image" placeholder="lien de l'image" [formControl]="form.controls.lienImg">
      </div>
      <button class="btn-submit" (click)="goTableauFilm()">Ajouter</button>
    </form>
  </div>

  `,
  styleUrls: ['./ajout-video.component.scss']
})
export class AjoutVideoComponent implements OnInit {
  realisateurs: Realisateur[] | undefined;
  categories: Categorie[] | undefined;

  form = new FormGroup({
    titre: new FormControl<string>('', Validators.required),
    duree: new FormControl<number>(0, Validators.required),
    dateSortie: new FormControl<Date>(new Date(), Validators.required),
    budget: new FormControl<number>(0, Validators.required),
    montantRecette: new FormControl<number>(0, Validators.required),
    noRea: new FormControl<number>(0, Validators.required),
    codeCat: new FormControl<string>('', Validators.required),
    lienImg: new FormControl<string>('', Validators.required),
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private filmService: FilmService,
              private realisateurService: RealisateurService,
              private categorieService: CategorieService) {
  }

  ngOnInit() {
    this.realisateurService.getRealisateurs().subscribe(v => {
      this.realisateurs = v;
    })

    this.categorieService.getCategories().subscribe(c => {
      this.categories = c;
    })
  }

  goTableauFilm() {
    this.filmService.addFilm(this.form.value).subscribe(() => {this.router.navigateByUrl('gestionVideo')})
  }
}
