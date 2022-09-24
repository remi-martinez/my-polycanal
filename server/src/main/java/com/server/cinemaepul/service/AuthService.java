package com.server.cinemaepul.service;

import com.server.cinemaepul.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    public Boolean existsByLogin(String login) {
        return this.utilisateurRepository.existsByLogin(login);
    }
}