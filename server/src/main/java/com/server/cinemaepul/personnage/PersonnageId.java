package com.server.cinemaepul.personnage;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PersonnageId implements Serializable {
    private static final long serialVersionUID = -2955374240123434273L;
    @Column(name = "no_film", nullable = false)
    private Integer noFilm;
    @Column(name = "no_act", nullable = false)
    private Integer noAct;

    @Override
    public int hashCode() {
        return Objects.hash(noAct, noFilm);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        PersonnageId entity = (PersonnageId) o;
        return Objects.equals(this.noAct, entity.noAct) &&
                Objects.equals(this.noFilm, entity.noFilm);
    }
}