import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Realisateur} from "../models/realisateur";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RealisateurService {
  private apiUrl = 'http://localhost:8080/realisateurs';

  constructor(private http: HttpClient) { }

  getRealisateurs(): Observable<Realisateur[]> {
    return this.http.get<Realisateur[]>(this.apiUrl);
  }

  getRealisateur(id: number): Observable<Realisateur> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Realisateur>(url);
  }

  addRealisateur(realisateur: any): Observable<Realisateur> {
    return this.http.post<Realisateur>(this.apiUrl, realisateur);
  }

  updateRealisateur(realisateurId: string, realisateur: Realisateur): Observable<Realisateur> {
    const url = `${this.apiUrl}/${realisateurId}`;
    return this.http.put<Realisateur>(url, realisateur);
  }

  deleteRealisateur(id: number): Observable<Realisateur> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Realisateur>(url);
  }
}
