import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Utilisateur} from "../models/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:8080";
 private _connectedUser: Utilisateur | undefined;
 private _currentUserSubject: BehaviorSubject<Utilisateur | undefined>;
 public currentUser: Observable<Utilisateur | undefined>;


  constructor(private http: HttpClient) {
   this._connectedUser = JSON.parse(localStorage.getItem('connectedUser')!) || undefined;
   this._currentUserSubject = new BehaviorSubject<Utilisateur | undefined>(this._connectedUser);
   this.currentUser = this._currentUserSubject.asObservable();
  }

  login(login: string, password: string): Observable<any> {
    return this.http.post<any>(this.url+'/api/login', {"login":login,"password":password});
  }

  loginSuccessful(res: { token: string }): void {
    localStorage.setItem('token', res.token);
    this.me().subscribe({
      next: res => {
        localStorage.setItem('connectedUser', JSON.stringify(Utilisateur.adapt(res)));
        this._connectedUser = Utilisateur.adapt(res);
        this._currentUserSubject.next(this._connectedUser);
      }
    });
  }

  public isAuthenticated(): boolean {
    return !!this._connectedUser;
  }

  public getCurrentUser(): Observable<any> {
    return this._currentUserSubject.asObservable()
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('connectedUser');
    this._connectedUser = undefined;
    this._currentUserSubject.next(undefined);
  }

  me(): Observable<Utilisateur> {
    return this.http.get<any>(this.url+'/users/me')
  }
}

interface JwtResponse {
  accesstoken: string;
}
