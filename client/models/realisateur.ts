
export class Realisateur {
  id: number;
  nomRea: string;
  prenRea: string;

  constructor(id: number, nomRea: string, prenRea: string) {
    this.id = id;
    this.nomRea = nomRea;
    this.prenRea = prenRea;
  }

  static adapt(item: any): Realisateur {
    return new Realisateur(item.id, item.nomRea, item.prenRea)
  }
}
