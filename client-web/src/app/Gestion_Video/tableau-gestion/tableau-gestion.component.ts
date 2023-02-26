import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableau-gestion',
  templateUrl: './tableau-gestion.component.html',
  styleUrls: ['./tableau-gestion.component.scss']
})
export class TableauGestionComponent implements OnInit{


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ajoutFilm() {
    this.router.navigateByUrl('ajoutVideo');
  }

  modifFilm(){
    this.router.navigateByUrl('modifVideo');
  }


}
