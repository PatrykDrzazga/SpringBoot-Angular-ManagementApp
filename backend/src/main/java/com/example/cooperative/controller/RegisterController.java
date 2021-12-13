package com.example.cooperative.controller;

import com.example.cooperative.config.LoginCredentials;
import com.example.cooperative.model.Authorities;
import com.example.cooperative.model.User;
import com.example.cooperative.repository.AuthoritiesRepository;
import com.example.cooperative.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class RegisterController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthoritiesRepository authoritiesRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/register")
    public ResponseEntity<User> processRegister(@RequestBody LoginCredentials credentials) {
        if(!credentials.getUsername().isEmpty() && !credentials.getPassword().isEmpty()) {
            String encodedPassword = bCryptPasswordEncoder.encode(credentials.getPassword());
            User user = new User();
            user.setEmail(credentials.getUsername());
            user.setPassword(encodedPassword);
            user.setEnabled(true);
            user.setFirstName(credentials.getFirstname());
            user.setLastName(credentials.getLastname());
            user.setBirthDate(credentials.getBirthdate());
            return ResponseEntity.ok(userRepository.save(user));
        }

        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/addAuthorities")
    public ResponseEntity addAuthorities(String username) {

        Authorities authorities = new Authorities();
        authorities.setUsername(username);
        authorities.setAuthority("USER");

        return ResponseEntity.ok( authoritiesRepository.save(authorities));
    }
}
