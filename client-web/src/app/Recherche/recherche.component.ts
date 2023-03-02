import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Film} from "../models/film";
import {FilmService} from "../services/film.service";
import {Observable} from "rxjs";

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

  popUp!: boolean;
  showFav: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private filmService: FilmService) {
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
        complete: () => console.log(this.films)
      }
      this.films$.subscribe(this.filmsObserver)
    });
  }
  showPopUp(film: Film) {
    this.popUp = true;
    this.film = film;
  }
}
