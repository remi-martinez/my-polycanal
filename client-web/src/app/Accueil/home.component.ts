import {Component} from "@angular/core";

@Component({
  selector: 'app-home',
  template: `
    <app-grand-carousel></app-grand-carousel>
    <app-carousel-type></app-carousel-type>
  `,
  styles: [``]
})
export class HomeComponent {

  constructor() {
  }
}
