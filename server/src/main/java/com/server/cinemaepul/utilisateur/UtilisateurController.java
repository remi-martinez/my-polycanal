package com.server.cinemaepul.utilisateur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UtilisateurController {
    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping("/me")
    public UtilisateurDTO getConnectedUser() {
        return this.utilisateurService.getConnectedUtilisateurDTO();
    }

    @GetMapping
    public List<Utilisateur> findAll() {
        return this.utilisateurService.findAll();
    }

    @GetMapping("/{id}")
    public Utilisateur getByIdOrThrow(@PathVariable("id") Integer userId) {
        return this.utilisateurService.getByIdOrThrow(userId);
    }

    @PostMapping
    public Utilisateur create(@RequestBody UtilisateurInput utilisateurInput) {
        return this.utilisateurService.create(utilisateurInput);
    }

    @PutMapping("/{id}")
    public Utilisateur update(@PathVariable("id") Integer utilisateurId, @RequestBody UtilisateurInput utilisateurInput) {
        return this.utilisateurService.update(utilisateurId, utilisateurInput);
    }

    @DeleteMapping("/{id}")
    public Integer delete(@PathVariable("id") Integer utilisateurId) {
        return this.utilisateurService.delete(utilisateurId);
    }

}
