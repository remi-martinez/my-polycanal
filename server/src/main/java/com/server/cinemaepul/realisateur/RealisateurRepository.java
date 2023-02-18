package com.server.cinemaepul.realisateur;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RealisateurRepository extends JpaRepository<Realisateur, Integer> {
    Realisateur findByNomRea(String nomRea);
}
