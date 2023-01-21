package com.server.cinemaepul.realisateur;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class RealisateurService {
    @Autowired
    private RealisateurRepository realisateurRepository;

    public Realisateur getByIdOrThrow(Integer realisateurId) {
        return realisateurRepository.findById(realisateurId)
                .orElseThrow(() -> {
                    log.error("Realisateur {} non trouvé en base", realisateurId);
                    return new RuntimeException("Le realisateur n'a pas été trouvé");
                });
    }

    public List<Realisateur> findAll() {
        return realisateurRepository.findAll();
    }

    public Realisateur findByNom(String nom) {
        return realisateurRepository.findByNomRea(nom);
    }

    public Realisateur create(RealisateurInput realisateurInput) {
        Realisateur realisateur = Realisateur.builder()
                .nomRea(realisateurInput.getNomRea())
                .prenRea(realisateurInput.getPrenomRea())
                .build();
        return realisateurRepository.save(realisateur);
    }

    public Realisateur update(Integer realisateurId, RealisateurInput realisateurInput) {
        Realisateur oldRealisateur = getByIdOrThrow(realisateurId);

        Realisateur realisateur = Realisateur.builder()
                .id(oldRealisateur.getId())
                .nomRea(realisateurInput.getNomRea())
                .prenRea(realisateurInput.getPrenomRea())
                .build();
        return realisateurRepository.save(realisateur);
    }

    public Integer delete(Integer realisateurId) {
        realisateurRepository.deleteById(realisateurId);
        return realisateurId;
    }
}
