export class Categorie {
  id: string;
  libelleCat: string;
  image: string;

  constructor(id:string, libelleCat: string, image: string) {
    this.id = id;
    this.libelleCat = libelleCat;
    this.image = image;
  }

  static adapt(item: any): Categorie {
    return new Categorie(item.id, item.libelleCat, item.image)
  }
}
