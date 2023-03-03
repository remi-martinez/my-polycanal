import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Film} from "../../models/film";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-grand-carousel',
  templateUrl: './grand-carousel.component.html',
  styleUrls: ['./grand-carousel.component.scss']
})
export class GrandCarouselComponent implements OnInit {

  films$: Observable<Film[]> | undefined;
  filmsObserver: any;
  films: Film[] | undefined;
  images: any[] = [];
  popUp!: boolean;
  film: Film | undefined;
  constructor(private filmService: FilmService) {
  }

  ngOnInit() {

      this.films$ = this.filmService.getBestFilms(); // get all films
      this.filmsObserver = {
        next: (f: Film[]) => {
          for (const film of f) {
            this.images.push({path: film.lienImg});
          }

        },
        error: (err: Error) => console.error("Error while fetching : " + err),
      }
      this.films$.subscribe(this.filmsObserver)
    }

  showPopUp(film: Film) {
    this.popUp = true;
    this.film = film;
  }
}
