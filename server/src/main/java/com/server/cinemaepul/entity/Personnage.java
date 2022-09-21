package com.server.cinemaepul.entity;

import javax.persistence.*;

@Table(name = "personnage", indexes = {
        @Index(name = "NoFilm", columnList = "NoFilm"),
        @Index(name = "NoAct", columnList = "NoAct")
})
@Entity
public class Personnage {
    @EmbeddedId
    private PersonnageId id;

    @Column(name = "NomPers", nullable = false, length = 30)
    private String nomPers;

    public String getNomPers() {
        return nomPers;
    }

    public void setNomPers(String nomPers) {
        this.nomPers = nomPers;
    }

    public PersonnageId getId() {
        return id;
    }

    public void setId(PersonnageId id) {
        this.id = id;
    }
}