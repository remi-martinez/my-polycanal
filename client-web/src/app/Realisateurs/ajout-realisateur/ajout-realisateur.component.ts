import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RealisateurService} from "../../services/realisateur.service";

@Component({
  selector: 'app-ajout-realisateur',
  template: `
    <h1>Ajouter un réalisateur</h1>
    <div class="form-class">
      <form [formGroup]="form">
        <div class="input-label-div">
          <label>Nom du réalisateur</label>
          <input type="text" name="nomRea" placeholder="Nom du réalisateur" [formControl]="form.controls.nomRea">
        </div>
        <div class="input-label-div">
          <label>Prénom du réalisateur</label>
          <input type="text" name="prenRea" placeholder="Prénom du réalisateur" [formControl]="form.controls.prenRea">
        </div>
        <div class="input-label-div">
          <label>Lien image</label>
          <input type="text" name="lien_image" placeholder="lien de l'image" [formControl]="form.controls.lienImg">
        </div>
        <button class="btn-submit" (click)="goPageRealisateurs()">Ajouter</button>
      </form>
      <meta property="og:image"
            content="https://fr.web.img5.acsta.net/c_310_420/pictures/14/10/30/10/59/215487.jpg" />
      <<img src="form.controls.lienImg" alt="">
    </div>
  `,
  styleUrls: ['./ajout-realisateur.component.scss']
})
export class AjoutRealisateurComponent implements OnInit {
  form = new FormGroup({
    nomRea: new FormControl<string>('', Validators.required),
    prenRea: new FormControl<string>('', Validators.required),
    lienImg: new FormControl<string>('', Validators.required),
  });

  constructor(private router: Router,
              private realisateurService: RealisateurService) {
  }

  ngOnInit() {
  }

  goPageRealisateurs() {
    this.realisateurService.addRealisateur(this.form.value).subscribe(() => {
      this.router.navigateByUrl('realisateurs')
    })
  }

}
