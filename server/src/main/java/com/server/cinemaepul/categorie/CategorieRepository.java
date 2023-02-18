package com.server.cinemaepul.categorie;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepository extends JpaRepository<Categorie, Integer> {
    Categorie findByLibelleCat(String libelleCat);
    Categorie findById(String id);
    String deleteById(String id);
}
