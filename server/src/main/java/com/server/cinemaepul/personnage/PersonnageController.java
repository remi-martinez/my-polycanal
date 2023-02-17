package com.server.cinemaepul.personnage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personnages")
public class PersonnageController {
    @Autowired
    private PersonnageService personnageService;

    @GetMapping
    public List<Personnage> findAll() {
        return personnageService.findAll();
    }

    @RequestMapping("/{idAct}-{idFilm}")
    public Personnage getByIdOrThrow(@PathVariable("idAct") Integer id, @PathVariable("idFilm") Integer id2) {
        return personnageService.getByIdOrThrow(id, id2);
    }

    @PostMapping
    public Personnage create(@RequestBody PersonnageInput personnageInput) {
        return personnageService.create(personnageInput);
    }

    @PutMapping("/{idAct}-{idFilm}")
    public Personnage update(@PathVariable("idAct") Integer id, @PathVariable("idFilm") Integer id2,
                             @RequestBody PersonnageInput personnageInput) {
        return personnageService.update(id, id2, personnageInput);
    }

    @DeleteMapping("/{idAct}-{idFilm}")
    public PersonnageId delete(@PathVariable("idAct") Integer id, @PathVariable("idFilm") Integer id2) {
        return personnageService.delete(id, id2);
    }
}
