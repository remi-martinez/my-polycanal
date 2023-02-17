package com.server.cinemaepul.film;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/films")
public class FilmController {
    @Autowired
    private FilmService filmService;

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
    public List<Film> getByCategorie(@PathVariable("codeCat") String codeCat) {
        return filmService.getAllByCategorie(codeCat);
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
