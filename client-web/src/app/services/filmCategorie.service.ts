import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FilmCategorieService {
  constructor(private router: Router) {
  }

  goTousFilms() {
    this.router.navigateByUrl('categories');
  }

  goActionFilms() {
    this.router.navigate(['categories'], {queryParams: {codeCat: 'AC'}});
  }

  goComedieFilm() {
    this.router.navigate(['categories'], {queryParams: {codeCat: 'CO'}});
  }

  goPolicierFilm() {
    this.router.navigate(['categories'], {queryParams: {codeCat: 'PO'}});
  }

  goWesternFilm() {
    this.router.navigate(['categories'], {queryParams: {codeCat: 'WE'}});
  }
}
