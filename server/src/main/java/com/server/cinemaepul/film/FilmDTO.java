package com.server.cinemaepul.film;

import jakarta.persistence.Column;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FilmDTO {
    private Integer id;
    private String titre;
}
