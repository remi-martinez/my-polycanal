import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Film} from "../../models/film";
import {Observable} from "rxjs";
import {FilmService} from "../../services/film.service";
import {Realisateur} from "../../models/realisateur";
import {RealisateurService} from "../../services/realisateur.service";
import {CategorieService} from "../../services/categorie.service";
import {Categorie} from "../../models/categorie";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modif-video',
  template: `<h1>Modifier le film</h1>

  <div>
      <form [formGroup]="form">
          <div>
              <label>Titre du film</label>
              <input type="text" name="titreFilm" placeholder="Titre du film..." [formControl]="form.controls.titre">
          </div>
          <div>
              <label>Réalisateur</label>
              <select [formControl]="form.controls.noRea">
                  <option *ngFor="let realisateur of realisateurs" [value]="realisateur.id">
                      {{realisateur.id + " " + realisateur.prenRea + " " + realisateur.nomRea}}
                  </option>
              </select>
            <button (click)="debug()"></button>
          </div>
          <div>
              <label>Catégorie</label>
              <select [formControl]="form.controls.codeCat">
                  <option *ngFor="let categorie of categories" [value]="categorie.id">{{categorie.libelleCat}}</option>
              </select>
          </div>
          <div>
              <label>Durée</label>
              <input type="time" name="duree" placeholder="Durée" [formControl]="form.controls.duree">
          </div>
          <div>
              <label>Date de sortie</label>
              <input type="date" name="date" [formControl]="form.controls.dateSortie"
                     min="1900-01-01" max="2023-12-31">
          </div>
          <div>
              <label>Budget (€)</label>
              <input type="number" name="budget" placeholder="0000" [formControl]="form.controls.budget">
          </div>
          <div>
              <label>Montant recette (€)</label>
              <input type="number" name="recette" placeholder="0000" [formControl]="form.controls.montantRecette">
          </div>
          <button class="btn-submit" (click)="goTableauFilm()">Submit</button>
      </form>
  </div>

  `,
  styleUrls: ['./modif-video.component.scss']
})
export class ModifVideoComponent implements OnInit {

  filmId: any | null;
  film: Film = {
    titre:'A',
    noRea: {
      prenRea: '',
      nomRea: '',
      id: 0
    },
    budget: 0,
    dateSortie: new Date(),
    duree: 0,
    montantRecette: 0,
    id:0,
    codeCat: {
      id: '',
      libelleCat: '',
      image: ''
    }
  };
  realisateurs: Realisateur[] | undefined;
  categories: Categorie[] | undefined;
  rlId: number = 2;

  form = new FormGroup({
    titre: new FormControl<string>('', Validators.required),
    duree: new FormControl<number>(0, Validators.required),
    dateSortie: new FormControl<Date>(new Date(), Validators.required),
    budget: new FormControl<number>(0, Validators.required),
    montantRecette: new FormControl<number>(0, Validators.required),
    noRea: new FormControl<number>(0, Validators.required),
    codeCat: new FormControl<string>('', Validators.required),
    //image: new FormControl('', Validators.required),
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private filmService: FilmService,
              private realisateurService: RealisateurService,
              private categorieService: CategorieService) {
    this.filmId = this.route.snapshot.queryParamMap.get('id');
  }

  ngOnInit() {
    this.filmService.getFilmById(this.filmId).subscribe(v => {
      this.form.setValue({
        budget: v.budget,
        codeCat: v.codeCat?.id!,
        dateSortie: v.dateSortie,
        duree: v.duree,
        noRea: v.noRea.id!,
        titre: v.titre,
        montantRecette: v.montantRecette
      })
      this.film = v;
      console.log(v.noRea)
      this.rlId = v.noRea.id;
    })

    this.realisateurService.getRealisateurs().subscribe(v => {
      this.realisateurs = v;
      console.log(v)
    })

    this.categorieService.getCategories().subscribe(c => {
      this.categories = c;
    })
  }

  goTableauFilm() {
    this.router.navigateByUrl('gestionVideo');
  }

  debug() {
    console.log(this.form);
  }
}
