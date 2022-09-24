package com.server.cinemaepul.repository;

import com.server.cinemaepul.entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, String> {
    Boolean existsByLogin(String Login);

    Utilisateur findUtilisateurByLogin(String login);
}