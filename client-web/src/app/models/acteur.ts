export class Acteur {
  nomAct: string;
  prenAct: string;
  dateNaiss: Date;
  dateDeces: Date;

  constructor(nomAct: string, prenAct: string, dateNaiss: Date, dateDeces: Date) {
    this.nomAct = nomAct;
    this.prenAct = prenAct;
    this.dateNaiss = dateNaiss;
    this.dateDeces = dateDeces;
  }

  static adapt(item: any): Acteur {
    return new Acteur(item.nomAct, item.prenAct, item.dateNaiss, item.dateDeces)
  }
}
