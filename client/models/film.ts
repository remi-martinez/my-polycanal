import { Realisateur } from './realisateur';
import { Categorie } from './categorie';

export class Film {
  id: number;
  titre: string;
  duree: number;
  dateSortie: Date;
  budget: number;
  montantRecette: number;
  noRea: Realisateur;
  codeCat: Categorie;
  lienImg: string;

  constructor(id: number, titre: string, duree: number, dateSortie: Date, budget: number, montantRecette: number, noRea: Realisateur, codeCat: Categorie, lienImg: string) {
    this.id = id;
    this.titre = titre;
    this.duree = duree;
    this.dateSortie = dateSortie;
    this.budget = budget;
    this.montantRecette = montantRecette;
    this.noRea = noRea;
    this.codeCat = codeCat;
    this.lienImg = lienImg;
  }

  static adapt(item: any): Film {
    return new Film(
      item.id, item.titre, item.duree, new Date(item.dateSortie), item.budget, item.montantRecette, item.noRea, item.codeCat, item.lienImg)
  }
}
