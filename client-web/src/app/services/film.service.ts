import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Film} from "../models/film";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private apiUrl = 'http://localhost:8080/films';

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl);
  }

  getFilmById(id: number): Observable<Film> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Film>(url);
  }

  addFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.apiUrl, film);
  }

  updateFilm(film: Film): Observable<any> {
    const url = `${this.apiUrl}/${film.id}`;
    return this.http.put(url, film);
  }

  deleteFilm(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
