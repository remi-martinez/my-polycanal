import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Acteur} from "../models/acteur";
import {map, Observable} from "rxjs";
import {Personnage} from "../models/personnage";

@Injectable({
  providedIn: 'root'
})
export class ActeurService {
  private apiUrl = 'http://localhost:8080/acteurs';

  constructor(private http: HttpClient) { }

  getAllActeursWithPersonnages(): Observable<Acteur[]> {
    return this.http.get<any[]>(this.apiUrl).pipe( //TODO Faire l'url avec le DTO
      map(items => items.map(item => {
        const personnages = item.personnages.map((p: any) => new Personnage(p.nomPers, p.film, p.acteur));
        return new Acteur(item.nomAct, item.prenAct, new Date(item.dateNaiss), item.dateDeces ? new Date(item.dateDeces) : null, item.lienImg, personnages);
      }))
    );

  }
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
}
