package com.server.cinemaepul.acteur;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class ActeurService {
    @Autowired
    private ActeurRepository acteurRepository;

    public Acteur getByIdOrThrow(Integer acteurId) {
        return acteurRepository.findById(acteurId)
                .orElseThrow(() -> {
                    log.error("Acteur {} non trouvé en base", acteurId);
                    return new RuntimeException("L'acteur n'a pas été trouvé");
                });
    }

    public List<Acteur> findAll() {
        return acteurRepository.findAll();
    }

    /**
     * Crée un acteur en base
     *
     * @param acteurInput acteurInput
     * @return acteur créé
     */
    public Acteur create(ActeurInput acteurInput) {
        Acteur acteur = Acteur.builder()
                .nomAct(acteurInput.getNomAct())
                .prenAct(acteurInput.getPrenAct())
                .dateNaiss(acteurInput.getDateNaiss())
                .dateDeces(acteurInput.getDateDeces())
                .build();
        return acteurRepository.save(acteur);
    }

    /**
     * Met à jour un acteur en base
     *
     * @param acteurId    id acteur
     * @param acteurInput acteurInput
     * @return acteur mis à jour
     */
    public Acteur update(Integer acteurId, ActeurInput acteurInput) {
        Acteur oldActeur = getByIdOrThrow(acteurId);

        Acteur acteur = Acteur.builder()
                .id(oldActeur.getId())
                .nomAct(acteurInput.getNomAct())
                .prenAct(acteurInput.getPrenAct())
                .dateNaiss(acteurInput.getDateNaiss())
                .dateDeces(acteurInput.getDateDeces())
                .build();

        return acteurRepository.save(acteur);
    }

    /**
     * Supprime un acteur en base
     *
     * @param acteurId id acteur
     * @return id acteur supprimé
     */
    public Integer delete(Integer acteurId) {
        Acteur acteur = getByIdOrThrow(acteurId);
        acteurRepository.delete(acteur);
        return acteurId;
    }
}
