package com.server.cinemaepul.entity;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class PersonnageId implements Serializable {
    private static final long serialVersionUID = -2955374240123434273L;
    @Column(name = "no_film", nullable = false)
    private Integer noFilm;
    @Column(name = "no_act", nullable = false)
    private Integer noAct;

    public Integer getNoAct() {
        return noAct;
    }

    public void setNoAct(Integer noAct) {
        this.noAct = noAct;
    }

    public Integer getNoFilm() {
        return noFilm;
    }

    public void setNoFilm(Integer noFilm) {
        this.noFilm = noFilm;
    }

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