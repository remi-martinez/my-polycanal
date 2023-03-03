import {Component} from '@angular/core';
import {FilmCategorieService} from "../../services/filmCategorie.service";

@Component({
  selector: 'app-carousel-type',
  templateUrl: './carousel-type.component.html',
  styleUrls: ['./carousel-type.component.scss']
})
export class CarouselTypeComponent {

  constructor(public filmCategorieService: FilmCategorieService) {

  }
}
