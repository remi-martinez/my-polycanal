import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FilmService} from "../../services/film.service";
import {Observable} from "rxjs";
import {Film} from "../../models/film";

@Component({
  selector: 'app-tableau-gestion',
  templateUrl: './tableau-gestion.component.html',
  styleUrls: ['./tableau-gestion.component.scss']
})
export class TableauGestionComponent implements OnInit {

  films$: Observable<Film[]> | undefined;
  filmsObserver: any;
  films: Film[] | undefined;

  constructor(private router: Router,
              private filmService: FilmService) {
  }

  ngOnInit(): void {
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

  modifFilm(idFIlm: any) {
    this.router.navigate([ 'modifVideo' ], { queryParams: { id:idFIlm } })
  }

  ajoutFilm() {
    this.router.navigateByUrl('ajoutVideo');
  }
}
