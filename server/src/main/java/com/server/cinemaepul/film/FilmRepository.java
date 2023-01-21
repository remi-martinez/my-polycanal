package com.server.cinemaepul.film;

import com.server.cinemaepul.categorie.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FilmRepository extends JpaRepository<Film, Integer> {
    Film findByTitre(String titre);
    List<Film> findAllByCodeCat(Categorie codeCat);

}
