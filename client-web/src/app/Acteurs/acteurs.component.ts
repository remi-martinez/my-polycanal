import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router, RouterEvent} from "@angular/router";
import {Observable, Subject, takeUntil} from "rxjs";
import {Acteur} from "../models/acteur";

@Component({
  selector: 'app-videos',
  templateUrl: './acteurs.component.html',
  styles: []
})
export class ActeursComponent implements OnInit{

  acteurs$: Observable<Acteur[]> | undefined;
  acteursObserver: any;
  acteurs: Acteur[] | undefined;
  film: Acteur | undefined;
  showOverlay!: boolean;
  showFav: boolean = false;
  codeCat: string|null = null;

  public destroyed = new Subject<any>();

  constructor(private router: Router, private route: ActivatedRoute, private acteurService: ActeurService) {
    this.codeCat = this.route.snapshot.queryParamMap.get('codeCat');
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.codeCat = paramMap.get('codeCat');
      if (this.codeCat) {
        this.acteurs$ = this.acteurService.getFilmsByCategorie(this.codeCat);
      }else{
        this.acteurs$ = this.acteurService.getAllFilms();
      }
      this.acteursObserver = {
        next: (f: Acteur[]) => {
          this.acteurs = f;
        },
        error: (err: Error) => console.error("Error while fetching : " + err),
        complete: () => console.log(this.acteurs)
      }
      this.acteurs$.subscribe(this.acteursObserver)
    });

  }

  showPopUp(film: Acteur) {
    this.showOverlay = true;
    this.film = film;
  }

  goCategorieFilms() {
    this.router.navigateByUrl('categories');
  }

  goPersonnaliteFilms(){
    this.router.navigateByUrl('personnalite')
  }
}
