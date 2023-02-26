import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

  constructor(private router: Router) { }

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
