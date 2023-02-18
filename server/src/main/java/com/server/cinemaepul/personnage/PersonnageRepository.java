package com.server.cinemaepul.personnage;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonnageRepository extends JpaRepository<Personnage, PersonnageId> {
}

