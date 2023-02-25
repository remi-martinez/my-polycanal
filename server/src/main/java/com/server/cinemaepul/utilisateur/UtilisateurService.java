package com.server.cinemaepul.utilisateur;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class UtilisateurService {
    @Autowired
    public UtilisateurRepository utilisateurRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public List<Utilisateur> findAll() {
        return this.utilisateurRepository.findAll();
    }

    public Utilisateur create(UtilisateurInput utilisateurInput) {
        Utilisateur utilisateur = Utilisateur.builder()
                .login(utilisateurInput.getLogin())
                .password(passwordEncoder.encode(utilisateurInput.getPassword()))
                .build();

        return utilisateurRepository.save(utilisateur);
    }

    public Utilisateur update(Integer utilisateurId, UtilisateurInput utilisateurInput) {
        Utilisateur oldUtilisateur = this.getByIdOrThrow(utilisateurId);

        Utilisateur utilisateur = Utilisateur.builder()
                .id(oldUtilisateur.getId())
                .login(utilisateurInput.getLogin())
                .password(passwordEncoder.encode(utilisateurInput.getPassword()))
                .build();

        return utilisateurRepository.save(utilisateur);
    }

    public Integer delete(Integer utilisateurId) {
        Utilisateur utilisateur = this.getByIdOrThrow(utilisateurId);
        utilisateurRepository.delete(utilisateur);
        return utilisateurId;
    }

    public boolean existByLogin(String login) {
        return this.utilisateurRepository.existsByLogin(login);
    }

    public Utilisateur getByIdOrThrow(Integer utilisateurId) {
        return this.utilisateurRepository.findById(utilisateurId)
                .orElseThrow(() -> new RuntimeException("Utilisateur not found"));
    }

    public Optional<Utilisateur> loadByLogin(String login) {
        if(this.utilisateurRepository.existsByLogin(login)) {
            return this.utilisateurRepository.findUtilisateurByLogin(login);
        }
        return null;
    }

    public UtilisateurDTO getConnectedUtilisateurDTO() {
        Utilisateur utilisateur = this.getConnectedUtilisateur();
        return UtilisateurDTO.builder()
                .id(utilisateur.getId())
                .login(utilisateur.getLogin())
                .build();
    }

    public Utilisateur getConnectedUtilisateur() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return loadByLogin(authentication.getName()).get();
    }
}
