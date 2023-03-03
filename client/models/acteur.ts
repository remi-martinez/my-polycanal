import {Personnage} from "./personnage";

export class Acteur {
  id: number;
  nomAct: string;
  prenAct: string;
  dateNaiss: Date;
  dateDeces: Date | null;
  lienImg: string;
  personnages: Personnage[];

  constructor(id: number, nomAct: string, prenAct: string, dateNaiss: Date, dateDeces: Date | null, lienImg: string, personnages: Personnage[]) {
    this.id = id;
    this.nomAct = nomAct;
    this.prenAct = prenAct;
    this.dateNaiss = dateNaiss;
    this.dateDeces = dateDeces;
    this.lienImg = lienImg;
    this.personnages = personnages;
  }

  static adapt(item: any): Acteur {
    return new Acteur(item.id, item.nomAct, item.prenAct, item.dateNaiss, item.dateDeces, item.lienImg, item.personnages)
  }
}
