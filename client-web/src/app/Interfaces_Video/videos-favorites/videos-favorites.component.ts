import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-videos-favorites',
  templateUrl: './videos-favorites.component.html',
  styleUrls: ['./videos-favorites.component.scss']
})
export class VideosFavoritesComponent {

  constructor(private router: Router) { }

  showPopUp!: boolean;
  showOverlay!: boolean;
  showFav: boolean = true;

  goCategorieFilms() {
    this.router.navigateByUrl('categories');
  }

}
