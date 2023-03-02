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

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {

      this.films$ = this.filmService.getBestFilms(); // get all films
      this.filmsObserver = {
        next: (f: Film[]) => {
          for (const film of f) {
              this.images.push({path:'/assets/img/imageTestTopGun.png', class:'affiche'});
              console.log(this.images)
          }

        },
        error: (err: Error) => console.error("Error while fetching : " + err),
        complete: () => console.log(this.films)
      }
      this.films$.subscribe(this.filmsObserver)
    }

  images=[
    {path:'/assets/img/imageTestTopGun.png', class:'affiche'},
    {path:'/assets/img/elvis-.jpg', class:'affiche'},
    {path:'/assets/img/imageTestTopGun.png', class:'affiche'},
    {path:'/assets/img/elvis-.jpg', class:'affiche'},
    {path:'/assets/img/imageTestTopGun.png', class:'affiche'},
    {path:'/assets/img/elvis-.jpg', class:'affiche'}
  ];
}
