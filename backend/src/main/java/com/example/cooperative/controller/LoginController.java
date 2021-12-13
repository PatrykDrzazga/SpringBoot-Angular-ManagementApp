package com.example.cooperative.controller;

import com.example.cooperative.config.LoginCredentials;
import com.example.cooperative.model.Authorities;
import com.example.cooperative.model.User;
import com.example.cooperative.repository.AuthoritiesRepository;
import com.example.cooperative.repository.UserRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class LoginController {
	
    @Autowired
    UserRepository userRepository;
    
    @Autowired
    AuthoritiesRepository authoritiesReposirtory;

    @PostMapping("/login")
    public void login(@RequestBody LoginCredentials credentials) {
    }
    
    @GetMapping("/user/getUser")
    public User getUser(String username) {
        return userRepository.findByEmail(username);
    }
    
    @GetMapping("/user/getall")
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    
    @GetMapping("/user/getUserRole")
    public Optional<Authorities> getUserRole(String username) {
        return authoritiesReposirtory.findById(username);
    }
}
