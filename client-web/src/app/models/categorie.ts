export class Categorie {
  libelleCat: string;
  image: string;

  constructor(libelleCat: string, image: string) {
    this.libelleCat = libelleCat;
    this.image = image;
  }

  static adapt(item: any): Categorie {
    return new Categorie(item.libelleCat, item.image)
  }
}
