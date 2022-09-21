package com.server.cinemaepul.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Table(name = "film", indexes = {
        @Index(name = "CodeCat", columnList = "CodeCat"),
        @Index(name = "NoRea", columnList = "NoRea")
})
@Entity
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NoFilm", nullable = false)
    private Integer id;

    @Column(name = "Titre", nullable = false, length = 30)
    private String titre;

    @Column(name = "Duree", nullable = false)
    private Integer duree;

    @Column(name = "DateSortie", nullable = false)
    private LocalDate dateSortie;

    @Column(name = "Budget", nullable = false)
    private Integer budget;

    @Column(name = "MontantRecette", nullable = false)
    private Integer montantRecette;

    @ManyToOne(optional = false)
    @JoinColumn(name = "NoRea", nullable = false)
    private Realisateur noRea;

    @ManyToOne(optional = false)
    @JoinColumn(name = "CodeCat", nullable = false)
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

    public Integer getMontantRecette() {
        return montantRecette;
    }

    public void setMontantRecette(Integer montantRecette) {
        this.montantRecette = montantRecette;
    }

    public Integer getBudget() {
        return budget;
    }

    public void setBudget(Integer budget) {
        this.budget = budget;
    }

    public LocalDate getDateSortie() {
        return dateSortie;
    }

    public void setDateSortie(LocalDate dateSortie) {
        this.dateSortie = dateSortie;
    }

    public Integer getDuree() {
        return duree;
    }

    public void setDuree(Integer duree) {
        this.duree = duree;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}