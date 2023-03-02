package com.server.cinemaepul.film;

import com.server.cinemaepul.personnage.PersonnageAvecFilmDto;
import com.server.cinemaepul.personnage.PersonnageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/films")
public class FilmController {
    @Autowired
    private FilmService filmService;

    @Autowired
    private PersonnageService personnageService;

    @GetMapping
    public List<Film> findAll() {
        return filmService.findAll();
    }

    @GetMapping("/{id}")
    public Film getByIdOrThrow(@PathVariable("id") Integer filmId) {
        return filmService.getByIdOrThrow(filmId);
    }

    @GetMapping("/titre/{titre}")
    public Optional<Film> getByTitre(@PathVariable("titre") String titre) {
        return filmService.getByTitre(titre);
    }

    @GetMapping("/categorie/{codeCat}")
    public List<Film> getByCategorie(@PathVariable("codeCat") String codeCat) {return filmService.getAllByCategorie(codeCat);}

    @GetMapping("/search/{value}")
    public List<Film> getBySearch(@PathVariable("value") String value) {
        return filmService.getAllBySearch(value);
    }

    @GetMapping("/{id}/personnages")
    public List<PersonnageAvecFilmDto> getPersonnagesByFilm(@PathVariable("id") Integer filmId) {
        try {
            return personnageService.getPersonnagesByFilm(filmId);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/best")
        public List<Film> getBestFilms() {
            return filmService.getBestFilms();
        }

    @PostMapping
    public Film create(@RequestBody FilmInput filmInput) {
        return filmService.create(filmInput);
    }

    @PutMapping("/{id}")
    public Film update(@PathVariable("id") Integer filmId,
                       @RequestBody FilmInput filmInput) {
        return filmService.update(filmId, filmInput);
    }

    @DeleteMapping("/{id}")
    public Integer delete(@PathVariable("id") Integer filmId) {
        return filmService.delete(filmId);
    }
}
