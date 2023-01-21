package com.server.cinemaepul.realisateur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/realisateurs")
public class RealisateurController {
    @Autowired
    private RealisateurService realisateurService;

    @RequestMapping
    public List<Realisateur> findAll() {
        return realisateurService.findAll();
    }

    @RequestMapping("/{id}")
    public Realisateur getByIdOrThrow(@PathVariable("id") Integer realisateurId) {
        return realisateurService.getByIdOrThrow(realisateurId);
    }

    @RequestMapping("/nom/{nom}")
    public Realisateur getByNom(@PathVariable("nom") String nom) {
        return realisateurService.findByNom(nom);
    }

    @PostMapping("/create")
    public Realisateur create(@RequestBody RealisateurInput realisateurInput) {
        return realisateurService.create(realisateurInput);
    }

    @PutMapping("/{id}")
    public Realisateur update(@PathVariable("id") Integer realisateurId,
                              @RequestBody RealisateurInput realisateurInput) {
        return realisateurService.update(realisateurId, realisateurInput);
    }

    @DeleteMapping("/{id}")
    public Integer delete(@PathVariable("id") Integer realisateurId) {
        return realisateurService.delete(realisateurId);
    }
}
