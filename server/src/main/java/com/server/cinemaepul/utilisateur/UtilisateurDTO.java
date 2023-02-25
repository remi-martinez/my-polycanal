package com.server.cinemaepul.utilisateur;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UtilisateurDTO {
    private Integer id;
    private String login;
}
