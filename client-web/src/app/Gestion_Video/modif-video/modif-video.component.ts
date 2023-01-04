import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-video',
  templateUrl: './modif-video.component.html',
  styleUrls: ['./modif-video.component.scss']
})
export class ModifVideoComponent {
  constructor(private router: Router) { }

  goTableauFilm() {
    this.router.navigateByUrl('gestionVideo');
  }
}
