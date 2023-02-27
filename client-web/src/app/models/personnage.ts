export class Personnage {
  noActeur: number;
  noFilm: number;
  nomPers: string;

  constructor(noActeur: number, noFilm: number, nomPers: string) {
    this.noActeur = noActeur;
    this.noFilm = noFilm;
    this.nomPers = nomPers;
  }

  static adapt(item: any): Personnage {
    return new Personnage(item.noActeur, item.noFilm, item.nomPers)
  }
}
