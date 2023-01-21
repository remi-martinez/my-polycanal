package com.server.cinemaepul.film;

import com.server.cinemaepul.categorie.CategorieService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class FilmService {
    @Autowired
    private FilmRepository filmRepository;

    @Autowired
    private CategorieService categorieService;

    public Film getByIdOrThrow(Integer filmId) {
        return filmRepository.findById(filmId)
                .orElseThrow(() -> {
                    log.error("Film {} non trouvé en base", filmId);
                    return new RuntimeException("Le film n'a pas été trouvé");
                });
    }

    public Optional<Film> getByTitre(String titre) {
        return Optional.of(filmRepository.findByTitre(titre));
    }

    public List<Film> findAll() {
        return filmRepository.findAll();
    }

    public List<Film> getAllByCategorie(String codeCat) {
        return filmRepository.findAllByCodeCat(categorieService.getById(codeCat));
    }

    public Film create(FilmInput filmInput) {
        Film film = Film.builder()
                .titre(filmInput.getTitre())
                .duree(filmInput.getDuree())
                .dateSortie(filmInput.getDateSortie())
                //.noRea(filmInput.getNoRea())
                .codeCat(categorieService.getById(filmInput.getCodeCat()))
                .budget(filmInput.getBudget())
                .montantRecette(filmInput.getMontantRecette())
                .build();
        return filmRepository.save(film);
    }

    public Film update(Integer filmId, FilmInput filmInput) {
        Film oldFilm = getByIdOrThrow(filmId);

        Film film = Film.builder()
                .id(oldFilm.getId())
                .titre(filmInput.getTitre())
                .duree(filmInput.getDuree())
                .dateSortie(filmInput.getDateSortie())
                //.noRea(filmInput.getNoRea())
                .codeCat(categorieService.getById(filmInput.getCodeCat()))
                .budget(filmInput.getBudget())
                .montantRecette(filmInput.getMontantRecette())
                .build();

        return filmRepository.save(film);
    }

    public Integer delete(Integer filmId) {
        filmRepository.deleteById(filmId);
        return filmId;
    }
}
