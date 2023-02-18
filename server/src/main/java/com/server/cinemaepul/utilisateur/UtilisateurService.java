package com.server.cinemaepul.utilisateur;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class UtilisateurService {
    @Autowired
    public UtilisateurRepository utilisateurRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Utilisateur create(UtilisateurInput utilisateurInput) {
        Utilisateur utilisateur = Utilisateur.builder()
                .login(utilisateurInput.getLogin())
                .password(passwordEncoder.encode(utilisateurInput.getPassword()))
                .build();

        return utilisateurRepository.save(utilisateur);
    }

    public boolean existByLogin(String login) {
        return this.utilisateurRepository.existsByLogin(login);
    }

    public Optional<Utilisateur> loadByLogin(String login) {
        if(this.utilisateurRepository.existsByLogin(login)) {
            return this.utilisateurRepository.findUtilisateurByLogin(login);
        }
        return null;
    }
}
