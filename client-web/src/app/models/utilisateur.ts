export class Utilisateur {
  constructor(
    public id: number,
    public login: string,
  ) {
  }

  static adapt(item: any): Utilisateur {
    return new Utilisateur(item.id,
      item.login)
  }
}
