import { Component } from '@angular/core';

@Component({
  selector: 'app-grand-carousel',
  templateUrl: './grand-carousel.component.html',
  styleUrls: ['./grand-carousel.component.scss']
})
export class GrandCarouselComponent {
  images=[
    {path:'/assets/img/imageTestTopGun.png'},
    {path:'/assets/img/elvis-.jpg'},
    {path:'/assets/img/imageTestTopGun.png'},
    {path:'/assets/img/elvis-.jpg'},
    {path:'/assets/img/imageTestTopGun.png'},
    {path:'/assets/img/elvis-.jpg'}
  ];
}
