package com.server.cinemaepul.authentication;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Integer id;
    private String login;
    private List<String> roles;

    public JwtResponse(String accessToken, Integer id, String login, List<String> roles) {
        this.token = accessToken;
        this.id = id;
        this.login = login;
        this.roles = roles;
    }
}