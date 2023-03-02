export class SignupResponse {
  id: number;
  login: string;
  password: string;

  constructor(id: number, login: string, password: string) {
    this.id = id;
    this.login = login;
    this.password = password;
  }

  static adapt(item: any): SignupResponse {
    return new SignupResponse(item.id, item.login, item.password)
  }
}
