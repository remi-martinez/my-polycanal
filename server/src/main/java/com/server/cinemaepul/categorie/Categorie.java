package com.server.cinemaepul.categorie;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.server.cinemaepul.film.Film;
import lombok.*;

import jakarta.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "categorie")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Categorie {
    @Id
    @Column(name = "code_cat", nullable = false, length = 2)
    private String id;

    @Column(name = "libelle_cat", nullable = false, length = 20)
    private String libelleCat;

    @Column(name = "image", nullable = false, length = 150)
    private String image;

    @JsonIgnore
    @OneToMany(mappedBy = "codeCat")
    private Set<Film> films = new LinkedHashSet<>();
}

