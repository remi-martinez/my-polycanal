package com.server.cinemaepul.personnage;

import com.server.cinemaepul.acteur.Acteur;
import com.server.cinemaepul.film.Film;
import lombok.*;

import javax.persistence.*;

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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "no_act")
    private Acteur acteur;

    @Column(name = "nom_pers", nullable = false)
    private String nomPers;


    public PersonnageId getId() {
        return id;
    }

    public void setId(PersonnageId id) {
        this.id = id;
    }

    //TODO Reverse Engineering! Migrate other columns to the entity
}