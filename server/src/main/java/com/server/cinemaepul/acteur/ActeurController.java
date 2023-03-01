package com.server.cinemaepul.acteur;

import com.server.cinemaepul.personnage.PersonnageAvecFilmDto;
import com.server.cinemaepul.personnage.PersonnageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/acteurs")
public class ActeurController {
    @Autowired
    private ActeurService acteurService;

    @Autowired
    private PersonnageService personnageService;

    @GetMapping
    List<Acteur> findAll() {
        return acteurService.findAll();
    }

    @GetMapping("/{id}")
    public Acteur getByIdOrThrow(@PathVariable("id") Integer acteurId) {
        return acteurService.getByIdOrThrow(acteurId);
    }

    @PostMapping
    public Acteur create(@RequestBody ActeurInput acteurInput) {
        return acteurService.create(acteurInput);
    }

    @PutMapping("/{id}")
    public Acteur update(@PathVariable("id") Integer acteurId,
                         @RequestBody ActeurInput acteurInput) {
        return acteurService.update(acteurId, acteurInput);
    }

    @DeleteMapping("/{id}")
    public Integer delete(@PathVariable("id") Integer acteurId) {
        return acteurService.delete(acteurId);
    }

    @GetMapping("/{id}/personnages")
    public List<PersonnageAvecFilmDto> getPersonnagesByActeur(@PathVariable("id") Integer acteurId) {
        try {
            return personnageService.getPersonnagesByActeur(acteurId);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
