package com.server.cinemaepul.film;

import com.server.cinemaepul.categorie.Categorie;
import com.server.cinemaepul.realisateur.Realisateur;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Table(name = "film", indexes = {
        @Index(name = "CodeCat", columnList = "code_cat"),
        @Index(name = "NoRea", columnList = "no_rea")
})
@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "no_film", nullable = false)
    private Integer id;

    @Column(name = "titre", nullable = false, length = 30)
    private String titre;

    @Column(name = "duree", nullable = false)
    private Integer duree;

    @Column(name = "date_sortie", nullable = false)
    private LocalDate dateSortie;

    @Column(name = "budget", nullable = false)
    private Integer budget;

    @Column(name = "montant_recette", nullable = false)
    private Integer montantRecette;

    @ManyToOne(optional = false)
    @JoinColumn(name = "no_rea", nullable = false)
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

    //TODO Reverse Engineering! Migrate other columns to the entity
}