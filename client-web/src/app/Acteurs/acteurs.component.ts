import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router, RouterEvent} from "@angular/router";
import {Observable, Subject, takeUntil} from "rxjs";
import {Acteur} from "../models/acteur";
import {ActeurService} from "../services/acteur.service";

@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['../Interfaces_Video/videos/videos.component.scss']
})
export class ActeursComponent implements OnInit{

  acteurs$: Observable<Acteur[]> | undefined;
  acteursObserver: any;
  acteurs: Acteur[] | undefined;
  film: Acteur | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private acteurService: ActeurService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.acteurs$ = this.acteurService.getAllActeursWithPersonnages();

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
}
