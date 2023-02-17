package com.server.cinemaepul.utilisateur;

import lombok.*;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UtilisateurInput {
    private String login;
    private String password;
}
