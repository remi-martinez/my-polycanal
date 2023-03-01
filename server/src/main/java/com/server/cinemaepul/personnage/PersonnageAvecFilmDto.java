package com.server.cinemaepul.personnage;

import java.time.LocalDate;
import java.util.Locale;

public class PersonnageAvecFilmDto {

    private String nomPers;
    private Integer idFilm;
    private String titre;
    private Integer anneeSortie;
    private String lienImg;

    public PersonnageAvecFilmDto(String nomPers, Integer idFilm, String titre, LocalDate dateSortie, String lienImg) {
        this.nomPers = nomPers;
        this.idFilm = idFilm;
        this.titre = titre;
        this.anneeSortie = dateSortie.getYear();
        this.lienImg = lienImg;
    }

    public String getNomPers() {
        return nomPers;
    }

    public void setNomPers(String nomPers) {
        this.nomPers = nomPers;
    }

    public Integer getIdFilm() {
        return idFilm;
    }

    public void setIdFilm(Integer idFilm) {
        this.idFilm = idFilm;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public Integer getAnneeSortie() {
        return anneeSortie;
    }

    public void setAnneeSortie(Integer anneeSortie) {
        this.anneeSortie = anneeSortie;
    }

    public String getLienImg() {
        return lienImg;
    }

    public void setLienImg(String lienImg) {
        this.lienImg = lienImg;
    }
}
