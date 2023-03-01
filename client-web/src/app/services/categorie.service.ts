import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../models/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrl);
  }

  getCategorie(id: string): Observable<Categorie> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Categorie>(url);
  }
}
