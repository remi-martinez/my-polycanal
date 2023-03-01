package com.server.cinemaepul.personnage;

import com.server.cinemaepul.acteur.Acteur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PersonnageRepository extends JpaRepository<Personnage, PersonnageId> {

    List<Personnage> findAllByActeur(Acteur acteur);
}

