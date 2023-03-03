import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router, RouterEvent} from "@angular/router";
import {FilmService} from "../../services/film.service";
import {Film} from "../../models/film";
import {Observable, Subject, takeUntil} from "rxjs";
import {PersonnageAvecFilmDto} from "../../models/personnageAvecFilmDto";
import {Personnage} from "../../models/personnage";
import {PersonnageService} from "../../services/personnage.service";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit{

  films$: Observable<Film[]> | undefined;
  filmsObserver: any;
  films: Film[] | undefined;
  film: Film | undefined;
  popUp!: boolean;
  showFav: boolean = false;
  codeCat: string|null = null;
  personnages$: Observable<Personnage[]> | undefined;
  personnagesObserver: any;
  personnages: Personnage[] | undefined;
  constructor(private router: Router, private route: ActivatedRoute, private filmService: FilmService, private personnageService: PersonnageService) {
    this.codeCat = this.route.snapshot.queryParamMap.get('codeCat');
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.codeCat = paramMap.get('codeCat');
      if (this.codeCat) {
        this.films$ = this.filmService.getFilmsByCategorie(this.codeCat);
      }else{
        this.films$ = this.filmService.getAllFilms();
      }
      this.filmsObserver = {
        next: (f: Film[]) => {
          this.films = f;
        },
        error: (err: Error) => console.error("Error while fetching : " + err),
      }
      this.films$.subscribe(this.filmsObserver)
    });

  }

  showPopUp(film: Film) {
    this.popUp = true;
    this.film = film;
    this.personnages$ = this.personnageService.getPersonnagesByFilmId(film.id);
    this.personnagesObserver = {
      next: (p: Personnage[]) => {
        this.personnages = p;
      },
      error: (err: Error) => console.error("Error while fetching : " + err),
    }
    this.personnages$.subscribe(this.personnagesObserver)
  }

  toHoursAndMinutes(duree: number|undefined) {
    if (duree){
      const hours = Math.floor(duree / 60);
      const minutes = duree % 60;
      return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
    }
    return '';
  }

  toEuro(number: number|undefined) {
    return number ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(number) : '';
  }
}
