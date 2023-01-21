package com.server.cinemaepul.categorie;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class CategorieService {
    @Autowired
    private CategorieRepository categorieRepository;

    public Categorie getById(String categorieId) {
        return categorieRepository.findById(categorieId);
    }

    public List<Categorie> findAll() {
        return categorieRepository.findAll();
    }

    public Categorie create(CategorieInput categorieInput) {
        Categorie categorie = Categorie.builder()
                .libelleCat(categorieInput.getLibelleCat())
                .image(categorieInput.getImage())
                .build();
        return categorieRepository.save(categorie);
    }

    public Categorie update(String categorieId, CategorieInput categorieInput) {
        Categorie oldCategorie = getById(categorieId);

        Categorie categorie = Categorie.builder()
                .id(oldCategorie.getId())
                .libelleCat(categorieInput.getLibelleCat())
                .image(categorieInput.getImage())
                .build();

        return categorieRepository.save(categorie);
    }

    public String delete(String categorieId) {
        categorieRepository.deleteById(categorieId);
        return categorieId;
    }
}
