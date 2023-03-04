import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Film} from "../models/film";
import {FilmService} from "../services/film.service";
import {Observable} from "rxjs";
import {Personnage} from "../models/personnage";
import {PersonnageService} from "../services/personnage.service";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['../Interfaces_Video/videos/videos.component.scss']
})
export class RechercheComponent implements OnInit{

  value: string|null = null;
  films$: Observable<Film[]> | undefined;
  filmsObserver: any;
  films: Film[] | undefined;
  film: Film | undefined;
  personnages$: Observable<Personnage[]> | undefined;
  personnagesObserver: any;
  personnages: Personnage[] | undefined;

  popUp!: boolean;
  showFav: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private filmService: FilmService, private personnageService: PersonnageService) {
    this.value = this.route.snapshot.queryParamMap.get('value');
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.value = paramMap.get('value');
      if (this.value) {
        this.films$ = this.filmService.getFilmsBySearch(this.value);
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
