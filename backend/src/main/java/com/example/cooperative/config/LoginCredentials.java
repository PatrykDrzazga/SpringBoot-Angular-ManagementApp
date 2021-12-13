package com.example.cooperative.config;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
public class LoginCredentials {
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private LocalDate birthdate;
}
