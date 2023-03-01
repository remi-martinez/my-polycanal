export class PersonnageAvecFilmDto {

  nomPers: string;
  idFilm: number;
  titre:  string;
  anneeSortie:  number;
  lienImg:  string;

  constructor(nomPers: string, idFilm: number, titre: string, anneeSortie: number, lienImg: string) {

    this.nomPers = nomPers;
    this.idFilm = idFilm;
    this.titre = titre;
    this.anneeSortie = anneeSortie;
    this.lienImg = lienImg;
  }

  static adapt(item: any): PersonnageAvecFilmDto {
    return new PersonnageAvecFilmDto(item.nomPers, item.idFilm, item.titre, item.anneeSortie, item.lienImg)
  }
}
