import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Film} from "../models/film";
import {Realisateur} from "../models/realisateur";
import {RealisateurService} from "../services/realisateur.service";
import {FilmService} from "../services/film.service";

@Component({
  selector: 'app-realisateurs',
  templateUrl: './realisateurs.component.html',
  styleUrls: ['./realisateurs.component.scss']
})
export class RealisateursComponent implements OnInit {

  realisateurs$: Observable<Realisateur[]> | undefined;
  realisateursObserver: any;
  realisateurs: Realisateur[] | undefined;
  realisateur: Realisateur | undefined;
  popUp!: boolean;
  films$: Observable<Film[]> | undefined;
  filmsObserver: any;
  films: Film[] | undefined;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private realisateurservice: RealisateurService,
              private filmService: FilmService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(() => {
      this.realisateurs$ = this.realisateurservice.getRealisateurs();

      this.realisateursObserver = {
        next: (f: Realisateur[]) => {
          this.realisateurs = f;
        },
        error: (err: Error) => console.error("Error while fetching : " + err),
        complete: () => console.log(this.realisateurs)
      }

      this.realisateurs$?.subscribe(this.realisateursObserver);
    });

  }

  showPopUp(realisateur: Realisateur) {
    this.popUp = true;
    this.realisateur = realisateur;
    this.films$ = this.filmService.getFilmsByRealisateur(realisateur.id);
    this.filmsObserver = {
      next: (p: Film[]) => {
        this.films = p;
      },
      error: (err: Error) => console.error("Error while fetching : " + err),
      complete: () => console.log(this.films)
    }
    this.films$?.subscribe(this.filmsObserver)
  }

  ajoutRealisateur() {
    this.router.navigateByUrl('ajoutRealisateur');
  }
}
