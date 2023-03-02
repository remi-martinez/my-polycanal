import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FilmCategorieService} from "../../services/filmCategorie.service";
import {Observable} from "rxjs";
import {Film} from "../../models/film";

@Component({
  selector: 'app-carousel-type',
  templateUrl: './carousel-type.component.html',
  styleUrls: ['./carousel-type.component.scss']
})
export class CarouselTypeComponent {

  constructor(public filmCategorieService: FilmCategorieService) {

  }
}
