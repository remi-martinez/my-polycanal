package com.server.cinemaepul.categorie;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CategorieInput {
    private String libelleCat;
    private String image;
}
