import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-carousel-type',
  templateUrl: './carousel-type.component.html',
  styleUrls: ['./carousel-type.component.scss']
})
export class CarouselTypeComponent {
  constructor(private router: Router) { }

  goTousFilms() {
    this.router.navigateByUrl('categories');
  }

  goActionFilms() {
    this.router.navigateByUrl('categories');
  }

  goComedieFilm() {
    this.router.navigateByUrl('categories');
  }

  goPolicierFilm() {
    this.router.navigateByUrl('categories');
  }

  goWesternFilm() {
    this.router.navigateByUrl('categories');
  }

}
