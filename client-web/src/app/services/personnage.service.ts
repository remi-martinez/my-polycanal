import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Personnage} from "../models/personnage";

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {
  private apiUrl = 'http://localhost:8080/personnages';

  constructor(private http: HttpClient) {
  }

  getPersonnages(): Observable<Personnage[]> {
    return this.http.get<Personnage[]>(this.apiUrl);
  }

  getPersonnage(idA: number, idF: number): Observable<Personnage> {
    const url = `${this.apiUrl}/${idA}-${idF}`;
    return this.http.get<Personnage>(url);
  }

  addPersonnage(personnage: any): Observable<Personnage> {
    return this.http.post<Personnage>(this.apiUrl, personnage);
  }

  updatePersonnage(idA: number, idF: number, personnage: any): Observable<Personnage> {
    const url = `${this.apiUrl}/${idA}-${idF}`;
    return this.http.put<Personnage>(url, personnage);
  }

  deletePersonnage(idA: number, idF: number): Observable<Personnage> {
    const url = `${this.apiUrl}/${idA}-${idF}`;
    return this.http.delete<Personnage>(url);
  }
  getPersonnagesByFilmId(filmId: number): Observable<Personnage[]> {
    const url = `${this.apiUrl}/film/${filmId}`;
    return this.http.get<Personnage[]>(url);
  }

}
