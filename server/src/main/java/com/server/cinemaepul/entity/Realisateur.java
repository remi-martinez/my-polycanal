package com.server.cinemaepul.entity;

import javax.persistence.*;

@Table(name = "realisateur")
@Entity
public class Realisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NoRea", nullable = false)
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}