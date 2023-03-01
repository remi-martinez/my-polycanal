package com.server.cinemaepul.personnage;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.server.cinemaepul.acteur.Acteur;
import com.server.cinemaepul.film.Film;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "personnage")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Personnage {
    @EmbeddedId
    private PersonnageId id;
    @MapsId("noAct")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "no_act")
    private Acteur acteur;
    @MapsId("noFilm")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "no_film")
    private Film film;
    @Column(name = "nom_pers", nullable = false)
    private String nomPers;

    public PersonnageId getId() {
        return id;
    }

    public void setId(PersonnageId id) {
        this.id = id;
    }

    public Acteur getActeur() {
        return acteur;
    }

    public void setActeur(Acteur acteur) {
        this.acteur = acteur;
    }

    public Film getFilm() {
        return film;
    }

    public void setFilm(Film film) {
        this.film = film;
    }

    public String getNomPers() {
        return nomPers;
    }

    public void setNomPers(String nomPers) {
        this.nomPers = nomPers;
    }
}