package com.server.cinemaepul.film;

import com.server.cinemaepul.categorie.Categorie;
import com.server.cinemaepul.realisateur.Realisateur;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface FilmRepository extends JpaRepository<Film, Integer> {
    Film findByTitre(String titre);

    List<Film> findAllByCodeCat(Categorie codeCat);
    List<Film> findAllByNoRea(Realisateur noRea);

    @Query("SELECT f FROM Film f " +
            "LEFT JOIN Realisateur r on r.id = f.noRea " +
            "LEFT JOIN Categorie c on c.id = f.codeCat " +
            "LEFT JOIN Personnage p on p.film = f.id " +
            "LEFT JOIN Acteur a on a.id = p.acteur " +
            "WHERE LOWER(CONCAT(f.titre, ' ', r.nomRea, ' ', r.prenRea, ' ', a.nomAct, ' ', a.prenAct, ' ', p.nomPers)) LIKE LOWER(CONCAT('%', :value, '%'))")
    List<Film> findAllBySearch(@Param("value") String value);


}
