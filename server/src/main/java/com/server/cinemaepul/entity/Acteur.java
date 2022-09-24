package com.server.cinemaepul.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "acteur")
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
    private Set<Personnage> personnages = new LinkedHashSet<>();

    public Set<Personnage> getPersonnages() {
        return personnages;
    }

    public void setPersonnages(Set<Personnage> personnages) {
        this.personnages = personnages;
    }

    public LocalDate getDateDeces() {
        return dateDeces;
    }

    public void setDateDeces(LocalDate dateDeces) {
        this.dateDeces = dateDeces;
    }

    public LocalDate getDateNaiss() {
        return dateNaiss;
    }

    public void setDateNaiss(LocalDate dateNaiss) {
        this.dateNaiss = dateNaiss;
    }

    public String getPrenAct() {
        return prenAct;
    }

    public void setPrenAct(String prenAct) {
        this.prenAct = prenAct;
    }

    public String getNomAct() {
        return nomAct;
    }

    public void setNomAct(String nomAct) {
        this.nomAct = nomAct;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}