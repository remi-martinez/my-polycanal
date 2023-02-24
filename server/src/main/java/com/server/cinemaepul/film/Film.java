package com.server.cinemaepul.film;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.server.cinemaepul.categorie.Categorie;
import com.server.cinemaepul.personnage.Personnage;
import com.server.cinemaepul.realisateur.Realisateur;
import lombok.*;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "code_cat")
    private Categorie codeCat;

    @JsonIgnore
    @OneToMany(mappedBy = "film")
    private Set<Personnage> personnages = new LinkedHashSet<>();
}