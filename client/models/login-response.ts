export class LoginResponse {
  id: number;
  login: string;
  roles: string[];
  token: string;
  type: string;

  constructor(id: number, login: string, roles: string[], token: string, type: string) {
    this.id = id;
    this.login = login;
    this.roles = roles;
    this.token = token;
    this.type = type;
  }

  static adapt(item: any): LoginResponse {
    return new LoginResponse(item.id, item.login, item.roles, item.token, item.type)
  }
}
