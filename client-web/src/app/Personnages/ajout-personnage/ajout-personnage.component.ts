import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Acteur} from "../../models/acteur";
import {Film} from "../../models/film";
import {Router} from "@angular/router";
import {ActeurService} from "../../services/acteur.service";
import {FilmService} from "../../services/film.service";
import {PersonnageService} from "../../services/personnage.service";

@Component({
  selector: 'app-ajout-personnage',
  template: `
    <h1>Ajouter un personnage</h1>
    <div class="form-class">
      <form [formGroup]="form">
        <div class="input-label-div">
          <label>Nom du personnage</label>
          <input type="text" name="nomPersonnage" placeholder="Nom du personnage" [formControl]="form.controls.nomPers">
        </div>
        <div class="input-label-div">
          <label>Acteur</label>
          <select [formControl]="form.controls.noActeur">
            <option *ngFor="let acteur of acteurs" [value]="acteur.id">
              {{acteur.prenAct + " " + acteur.nomAct}}
            </option>
          </select>
        </div>
        <div class="input-label-div">
          <label>Film</label>
          <select [formControl]="form.controls.noFilm">
            <option *ngFor="let film of films" [value]="film.id">{{film.titre}}</option>
          </select>
        </div>
        <button class="btn-submit" (click)="goTableauPersonnages()">Ajouter</button>
      </form>
    </div>
  `,
  styleUrls: ['./ajout-personnage.component.scss']
})
export class AjoutPersonnageComponent implements OnInit {
  acteurs: Acteur[] | undefined;
  films: Film[] | undefined;

  form = new FormGroup({
    nomPers: new FormControl<string>('', Validators.required),
    noActeur: new FormControl<number>(0, Validators.required),
    noFilm: new FormControl<number>(0, Validators.required),
  });

  constructor(private router: Router,
              private acteurService: ActeurService,
              private filmService: FilmService,
              private personnageService: PersonnageService) {
  }

  ngOnInit() {
    this.acteurService.getActeurs().subscribe(v => {
      this.acteurs = v;
    });

    this.filmService.getAllFilms().subscribe(f => {
      this.films = f;
    })
  }

  goTableauPersonnages() {
    this.personnageService.addPersonnage(this.form.value).subscribe(() => {
      this.router.navigateByUrl('personnages')
    })
  }

}
