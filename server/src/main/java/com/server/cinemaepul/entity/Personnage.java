package com.server.cinemaepul.entity;

import javax.persistence.*;

@Entity
@Table(name = "personnage")
public class Personnage {
    @EmbeddedId
    private PersonnageId id;
    @MapsId("noAct")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "no_act")
    private Acteur acteur;

    public Acteur getActeur() {
        return acteur;
    }

    public void setActeur(Acteur acteur) {
        this.acteur = acteur;
    }

    public PersonnageId getId() {
        return id;
    }

    public void setId(PersonnageId id) {
        this.id = id;
    }

    //TODO Reverse Engineering! Migrate other columns to the entity
}