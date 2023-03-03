import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FilmService} from "../services/film.service";
import {ActeurService} from "../services/acteur.service";
import {Observable} from "rxjs";
import {PersonnageAvecFilmDto} from "../models/personnageAvecFilmDto";
import {PersonnageService} from "../services/personnage.service";
import {Acteur} from "../models/acteur";
import {Personnage} from "../models/personnage";

@Component({
  selector: 'app-personnages',
  template: `
    <div>
      <table>
        <tr>
          <th style="border-radius: 10px 0px 0px 0px">Titre du film</th>
          <th>Personnage</th>
          <th>Acteur</th>
          <th style="border-radius: 0px 10px 0px 0px">Action</th>
        </tr>

        <tr *ngFor="let personnage of personnages">
          <td class="film">
            {{ personnage.film.titre}}
          </td>
          <td class="nomPers">
            {{ personnage.nomPers}}
          </td>
          <td class="acteur">
            {{ personnage.acteur.prenAct + " " + personnage.acteur.nomAct }}
          </td>
          <td class="action">
            <img (click)="suppPers(personnage.acteur.id, personnage.film.id)" src="assets/img/suppression.png">
          </td>
        </tr>
      </table>
      <div class="ajouter" (click)="ajoutPersonnage()" >
        <p>Ajouter un personnage</p>
      </div>
    </div>
  `,
  styleUrls: ['./personnages.component.scss']
})
export class PersonnageComponent implements OnInit {
  personnages$: Observable<Personnage[]> | undefined;
  personnagesObserver: any;
  personnages: Personnage[] | undefined;


  public constructor(private router: Router,
                     private filmService: FilmService,
                     private acteurService: ActeurService,
                     private personnageService: PersonnageService) {
  }

  ngOnInit() {
    this.personnages$ = this.personnageService.getPersonnages();

    this.personnagesObserver = {
      next: (f: Personnage[]) => {
        this.personnages = f;
      },
      error: (err: Error) => console.error("Error while fetching : " + err),
    }
    this.personnages$.subscribe(this.personnagesObserver)
  }

  suppPers(aId: any, pId: any) {
    this.personnageService.deletePersonnage(aId,pId).subscribe(() => {
      window.location.reload();
    })
  }

  ajoutPersonnage() {
    this.router.navigateByUrl('ajoutPersonnage');
  }
}
