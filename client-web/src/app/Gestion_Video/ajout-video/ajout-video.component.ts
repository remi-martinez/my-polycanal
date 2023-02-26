import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-video',
  templateUrl: './ajout-video.component.html',
  styleUrls: ['./ajout-video.component.scss']
})
export class AjoutVideoComponent {
  constructor(private router: Router) { }

  goTableauFilm() {
    this.router.navigateByUrl('gestionVideo');
  }
}
