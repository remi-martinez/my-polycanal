package com.server.cinemaepul.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Table(name = "acteur")
@Entity
public class Acteur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NoAct", nullable = false)
    private Integer id;

    @Column(name = "NomAct", nullable = false, length = 20)
    private String nomAct;

    @Column(name = "PrenAct", length = 20)
    private String prenAct;

    @Column(name = "DateNaiss")
    private LocalDate dateNaiss;

    @Column(name = "DateDeces")
    private LocalDate dateDeces;

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