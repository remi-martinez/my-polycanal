package com.server.cinemaepul.personnage;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PersonnageInput {
    private Integer noActeur;
    private Integer noFilm;
    private String nomPers;
}
