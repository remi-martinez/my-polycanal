package com.server.cinemaepul.entity;

import javax.persistence.*;

@Entity
@Table(name = "film")
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "no_film", nullable = false)
    private Integer id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "no_rea")
    private Realisateur noRea;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "code_cat")
    private Categorie codeCat;

    public Categorie getCodeCat() {
        return codeCat;
    }

    public void setCodeCat(Categorie codeCat) {
        this.codeCat = codeCat;
    }

    public Realisateur getNoRea() {
        return noRea;
    }

    public void setNoRea(Realisateur noRea) {
        this.noRea = noRea;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    //TODO Reverse Engineering! Migrate other columns to the entity
}