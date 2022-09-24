package com.server.cinemaepul.service;

import com.server.cinemaepul.entity.Utilisateur;
import com.server.cinemaepul.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UtilisateurService implements UserDetailsService {
    @Autowired
    private UtilisateurRepository utilisateurRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        Utilisateur utilisateur = this.utilisateurRepository.findUtilisateurByLogin(login);
        if (utilisateur == null) {
            throw new UsernameNotFoundException("L'utilisateur n'a pas été trouvé dans la base de donnée");
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        //authorities.add(new SimpleGrantedAuthority(Role.ROLE_USER.toString()));
        return new User(utilisateur.getLogin(), utilisateur.getPassword(), authorities);
    }

    public Utilisateur saveUtilisateur(Utilisateur utilisateur) {
        utilisateur.setPassword(passwordEncoder.encode(utilisateur.getPassword()));
        return this.utilisateurRepository.save(utilisateur);
    }

    public Utilisateur getUtilisateur(String login) {
        return this.utilisateurRepository.findUtilisateurByLogin(login);
    }

    public List<Utilisateur> getUtilisateurs() {
        return this.utilisateurRepository.findAll();
    }

}
