
export class Realisateur {
  id: number;
  nomRea: string;
  prenRea: string;
  lienImg: string;

  constructor(id: number, nomRea: string, prenRea: string, lienImg: string) {
    this.id = id;
    this.nomRea = nomRea;
    this.prenRea = prenRea;
    this.lienImg = lienImg;
  }

  static adapt(item: any): Realisateur {
    return new Realisateur(item.id, item.nomRea, item.prenRea, item.lienImg)
  }
}
