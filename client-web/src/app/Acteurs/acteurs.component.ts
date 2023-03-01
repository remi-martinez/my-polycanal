import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router, RouterEvent} from "@angular/router";
import {Observable, Subject, takeUntil} from "rxjs";
import {Acteur} from "../models/acteur";
import {ActeurService} from "../services/acteur.service";
import {Film} from "../models/film";
import {Personnage} from "../models/personnage";
import {PersonnageAvecFilmDto} from "../models/personnageAvecFilmDto";

@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['../Interfaces_Video/videos/videos.component.scss']
})
export class ActeursComponent implements OnInit{

  acteurs$: Observable<Acteur[]> | undefined;
  acteursObserver: any;
  acteurs: Acteur[] | undefined;
  acteur: Acteur | undefined;
  popUp!: boolean;
  personnages$: Observable<PersonnageAvecFilmDto> | undefined;
  personnagesObserver: any;
  personnages: PersonnageAvecFilmDto[] | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private acteurService: ActeurService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.acteurs$ = this.acteurService.getActeurs();

      this.acteursObserver = {
        next: (f: Acteur[]) => {
          this.acteurs = f;
        },
        error: (err: Error) => console.error("Error while fetching : " + err),
        complete: () => console.log(this.acteurs)
      }
      this.acteurs$.subscribe(this.acteursObserver)
    });

  }

  showPopUp(acteur: Acteur) {
    this.popUp = true;
    this.acteur = acteur;
    this.personnages$ = this.acteurService.getPersonnagesByActeurId(acteur.id);
    this.personnagesObserver = {
      next: (p: PersonnageAvecFilmDto[]) => {
        this.personnages = p;
      },
      error: (err: Error) => console.error("Error while fetching : " + err),
      complete: () => console.log(this.personnages)
    }
    this.personnages$.subscribe(this.personnagesObserver)
  }
}
