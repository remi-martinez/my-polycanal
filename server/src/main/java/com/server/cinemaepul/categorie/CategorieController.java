package com.server.cinemaepul.categorie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategorieController {
    @Autowired
    private CategorieService categorieService;

    @RequestMapping
    public List<Categorie> findAll() {
        return categorieService.findAll();
    }

    @RequestMapping("/{id}")
    public Categorie getByIdOrThrow(@PathVariable("id") String categorieId) {
        return categorieService.getById(categorieId);
    }

    @PostMapping("/create")
    public Categorie create(@RequestBody CategorieInput categorieInput) {
        return categorieService.create(categorieInput);
    }

    @PutMapping("/{id}")
    public Categorie update(@PathVariable("id") String categorieId,
                            @RequestBody CategorieInput categorieInput) {
        return categorieService.update(categorieId, categorieInput);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") String categorieId) {
        return categorieService.delete(categorieId);
    }
}
