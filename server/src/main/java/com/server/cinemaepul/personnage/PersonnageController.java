package com.server.cinemaepul.personnage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personnages")
public class PersonnageController {
    @Autowired
    private PersonnageService personnageService;

    @RequestMapping
    public List<Personnage> findAll() {
        return personnageService.findAll();
    }

    @RequestMapping("/{id}/{id2}")
    public Personnage getByIdOrThrow(@PathVariable("id") Integer id, @PathVariable("id2") Integer id2) {
        return personnageService.getByIdOrThrow(id, id2);
    }

    @PostMapping("/create")
    public Personnage create(@RequestBody PersonnageInput personnageInput) {
        return personnageService.create(personnageInput);
    }

    @PutMapping("/{id}/{id2}")
    public Personnage update(@PathVariable("id") Integer id, @PathVariable("id2") Integer id2,
                             @RequestBody PersonnageInput personnageInput) {
        return personnageService.update(id, id2, personnageInput);
    }

    @DeleteMapping("/{id}/{id2}")
    public PersonnageId delete(@PathVariable("id") Integer id, @PathVariable("id2") Integer id2) {
        return personnageService.delete(id, id2);
    }
}
