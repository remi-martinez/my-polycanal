import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FilmService} from "../../services/film.service";
import {Film} from "../../models/film";
import {Observable} from "rxjs";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit{

  films$: Observable<Film[]> | undefined;
  filmsObserver: any;
  films: Film[] | undefined;


  constructor(private router: Router, private filmService: FilmService) {

  }

  ngOnInit() {
    this.films$ = this.filmService.getAllFilms();
    this.filmsObserver = {
      next: (f: Film[]) => {
        this.films = f;
      },
      error: (err: Error) => console.error("Error while fetching : " + err),
      complete: () => console.log(this.films)
    }
    this.films$.subscribe(this.filmsObserver)
  }

  showPopUp!: boolean;
  showOverlay!: boolean;
  showFav: boolean = false;

  goCategorieFilms() {
    this.router.navigateByUrl('categories');
  }

  goPersonnaliteFilms(){
    this.router.navigateByUrl('personnalite')
  }


}
