import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ActeurService} from "../../services/acteur.service";

@Component({
  selector: 'app-ajout-acteur',
  template: `
    <div class="form-class">
      <form [formGroup]="form">
        <div class="input-label-div">
          <label>Nom de l'acteur</label>
          <input type="text" name="nomAct" placeholder="Nom de l'acteur" [formControl]="form.controls.nomAct">
        </div>
        <div class="input-label-div">
          <label>Prénom de l'acteur</label>
          <input type="text" name="prenAct" placeholder="Prénom de l'acteur" [formControl]="form.controls.prenAct">
        </div>
        <div class="input-label-div">
          <label>Date de naissance</label>
          <input type="date" name="dateNaiss" [formControl]="form.controls.dateNaiss"
                 min="1900-01-01" max="2023-12-31">
        </div>
        <div class="input-label-div">
          <label>Date de décès</label>
          <input type="date" name="dateDeces" [formControl]="form.controls.dateDeces"
                 min="1900-01-01" max="2023-12-31">
        </div>
        <div class="input-label-div">
          <label>Lien image</label>
          <input type="text" name="lien_image" placeholder="lien de l'image" [formControl]="form.controls.lienImg">
        </div>
        <button class="btn-submit" (click)="goPageActeurs()">Ajouter l'acteur</button>
      </form>
    </div>
  `,
  styleUrls: ['./ajout-acteur.component.scss']
})
export class AjoutActeurComponent implements OnInit {
  form = new FormGroup({
    nomAct: new FormControl<string>('', Validators.required),
    prenAct: new FormControl<string>('', Validators.required),
    dateNaiss: new FormControl<Date>(new Date(), Validators.required),
    dateDeces: new FormControl<Date>(new Date(), Validators.required),
    lienImg: new FormControl<string>('', Validators.required),
  });

  constructor(private router: Router,
              private acteurService: ActeurService) {
  }

  ngOnInit() {
  }

  goPageActeurs() {
    this.acteurService.addActeur(this.form.value).subscribe(() => {
      this.router.navigateByUrl('acteurs')
    })
  }

}
