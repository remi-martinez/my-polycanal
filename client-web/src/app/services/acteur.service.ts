import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Acteur} from "../models/acteur";
import {map, Observable} from "rxjs";
import {Personnage} from "../models/personnage";
import {PersonnageAvecFilmDto} from "../models/personnageAvecFilmDto";

@Injectable({
  providedIn: 'root'
})
export class ActeurService {
  private apiUrl = 'http://localhost:8080/acteurs';

  constructor(private http: HttpClient) { }

  getActeurs(): Observable<Acteur[]> {
    return this.http.get<Acteur[]>(this.apiUrl);
  }

  getActeur(id: number): Observable<Acteur> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Acteur>(url);
  }

  addActeur(acteur: Acteur): Observable<Acteur> {
    return this.http.post<Acteur>(this.apiUrl, acteur);
  }

  updateActeur(acteurId: string, acteur: Acteur): Observable<Acteur> {
    const url = `${this.apiUrl}/${acteurId}`;
    return this.http.put<Acteur>(url, acteur);
  }

  deleteActeur(id: number): Observable<Acteur> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Acteur>(url);
  }

  getPersonnagesByActeurId(acteurId: number): Observable<PersonnageAvecFilmDto> {

    const url = `${this.apiUrl}/${acteurId}/personnages`;
    return this.http.get<PersonnageAvecFilmDto>(url);
  }
}
