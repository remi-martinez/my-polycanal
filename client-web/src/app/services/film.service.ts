import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from "../models/film";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private apiUrl = 'http://localhost:8080/films';

  constructor(private http: HttpClient) {
  }

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl);
  }

  getFilmById(id: number): Observable<Film> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Film>(url);
  }

  getFilmsByCategorie(codeCat: string): Observable<Film[]> {
    const url = `${this.apiUrl}/categorie/${codeCat}`;
    return this.http.get<Film[]>(url);
  }

  getFilmsByRealisateur(noRea: number): Observable<Film[]> {
    const url = `${this.apiUrl}/realisateur/${noRea}`;
    return this.http.get<Film[]>(url);
  }

  getBestFilms(): Observable<Film[]>{
    const url = `${this.apiUrl}/best`;
    return this.http.get<Film[]>(url);
  }

  addFilm(film: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, film);
  }

  updateFilm(film: any): Observable<any> {
    const url = `${this.apiUrl}/${film.id}`;
    return this.http.put(url, film);
  }

  deleteFilm(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  getFilmsBySearch(value: string): Observable<Film[]> {
    const url = `${this.apiUrl}/search/${value}`;
    return this.http.get<Film[]>(url);
  }
}
