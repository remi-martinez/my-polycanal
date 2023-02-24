package com.server.cinemaepul.acteur;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.server.cinemaepul.personnage.Personnage;
import lombok.*;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "acteur")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Acteur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "no_act", nullable = false)
    private Integer id;

    @Column(name = "nom_act", nullable = false, length = 20)
    private String nomAct;

    @Column(name = "pren_act", length = 20)
    private String prenAct;

    @Column(name = "date_naiss")
    private LocalDate dateNaiss;

    @Column(name = "date_deces")
    private LocalDate dateDeces;

    @OneToMany(mappedBy = "acteur")
    @JsonIgnore
    private Set<Personnage> personnages = new LinkedHashSet<>();
}