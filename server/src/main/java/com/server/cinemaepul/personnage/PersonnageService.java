package com.server.cinemaepul.personnage;

import com.server.cinemaepul.acteur.ActeurService;
import com.server.cinemaepul.film.FilmService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class PersonnageService {
    @Autowired
    private PersonnageRepository personnageRepository;

    @Autowired
    private ActeurService acteurService;

    @Autowired
    private FilmService filmService;

    public Personnage getByIdOrThrow(Integer noAct, Integer noFilm) {
        PersonnageId pId = PersonnageId.builder()
                .noAct(noAct)
                .noFilm(noFilm)
                .build();

        return personnageRepository.findById(pId)
                .orElseThrow(() -> {
                    log.error("Personnage {} {} non trouvé en base", noAct, noFilm);
                    return new RuntimeException("Le personnage n'a pas été trouvé");
                });
    }

    public List<Personnage> findAll() {
        return personnageRepository.findAll();
    }

    public Personnage create(PersonnageInput personnageInput) {
        PersonnageId pId = PersonnageId.builder()
                .noAct(personnageInput.getNoActeur())
                .noFilm(personnageInput.getNoFilm())
                .build();

        Personnage personnage = Personnage.builder()
                .id(pId)
                .nomPers(personnageInput.getNomPers())
                .build();
        return personnageRepository.save(personnage);
    }

    public Personnage update(Integer noAct, Integer noFilm, PersonnageInput personnageInput) {
        Personnage oldPersonnage = getByIdOrThrow(noAct, noFilm);

        Personnage personnage = Personnage.builder()
                .id(oldPersonnage.getId())
                .nomPers(personnageInput.getNomPers())
                .build();

        return personnageRepository.save(personnage);
    }

    public PersonnageId delete(Integer noAct, Integer noFilm) {
        Personnage personnage = getByIdOrThrow(noAct, noFilm);
        personnageRepository.delete(personnage);
        return personnage.getId();
    }
}
