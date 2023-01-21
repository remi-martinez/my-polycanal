package com.server.cinemaepul.film;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FilmInput {
    private String titre;
    private Integer duree;
    private LocalDate dateSortie;
    private Integer budget;
    private Integer montantRecette;
    private Integer noRea;
    private String codeCat;
}
