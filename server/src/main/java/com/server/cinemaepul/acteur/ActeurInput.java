package com.server.cinemaepul.acteur;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ActeurInput {
    private String nomAct;
    private String prenAct;
    private LocalDate dateNaiss;
    private LocalDate dateDeces;
    private String lienImg;

}
