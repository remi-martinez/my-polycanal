import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router, RouterEvent} from "@angular/router";
import {FilmService} from "../../services/film.service";
import {Film} from "../../models/film";
import {Observable, Subject, takeUntil} from "rxjs";

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
  showOverlay!: boolean;
  showFav: boolean = false;
  codeCat: string|null = null;

  public destroyed = new Subject<any>();

  constructor(private router: Router, private route: ActivatedRoute, private filmService: FilmService) {
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
        complete: () => console.log(this.films)
      }
      this.films$.subscribe(this.filmsObserver)
    });

  }

  showPopUp(film: Film) {
    this.showOverlay = true;
    this.film = film;
  }

  goCategorieFilms() {
    this.router.navigateByUrl('categories');
  }

  goPersonnaliteFilms(){
    this.router.navigateByUrl('personnalite')
  }
}
