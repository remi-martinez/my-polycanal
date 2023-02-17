package com.server.cinemaepul.authentication;

import com.server.cinemaepul.utilisateur.UserDetailsImpl;
import com.server.cinemaepul.utilisateur.Utilisateur;
import com.server.cinemaepul.utilisateur.UtilisateurInput;
import com.server.cinemaepul.utilisateur.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UtilisateurService utilisateurService;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody UtilisateurInput utilisateurInput) {

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(utilisateurInput.getLogin(), utilisateurInput.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                roles));
    }

    @PostMapping("/signup")
    public Utilisateur registerUser(@RequestBody UtilisateurInput utilisateurInput) {
        if (utilisateurService.existByLogin(utilisateurInput.getLogin())) {
            throw new RuntimeException("Error: Username is already taken!");
        }

        return utilisateurService.create(utilisateurInput);
    }
}