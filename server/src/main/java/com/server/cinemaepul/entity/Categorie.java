package com.server.cinemaepul.entity;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "categorie")
public class Categorie {
    @Id
    @Column(name = "code_cat", nullable = false, length = 2)
    private String id;

    @Column(name = "libelle_cat", nullable = false, length = 20)
    private String libelleCat;

    @Column(name = "image", nullable = false, length = 150)
    private String image;

    @OneToMany(mappedBy = "codeCat")
    private Set<Film> films = new LinkedHashSet<>();

    public Set<Film> getFilms() {
        return films;
    }

    public void setFilms(Set<Film> films) {
        this.films = films;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getLibelleCat() {
        return libelleCat;
    }

    public void setLibelleCat(String libelleCat) {
        this.libelleCat = libelleCat;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}