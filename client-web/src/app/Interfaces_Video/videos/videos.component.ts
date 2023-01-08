import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  showPopUp!: boolean;
  showOverlay!: boolean;
  showFav: boolean = false;
}
