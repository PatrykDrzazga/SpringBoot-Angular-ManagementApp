package com.example.cooperative.model;

import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Email
    @Column(name = "username")
    private String email;

    @JsonIgnore
    @Column(name = "password")
    private String password;

    @Column(name = "enabled")
    private boolean enabled;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "birthdate")
    private LocalDate birthDate;

    public User() {

    }

    public User( @NotEmpty String email,
                 @NotEmpty String password) {
        this.email = email;
        this.password = password;
        this.enabled = false;
    }

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Payment> paymentList;

    @JsonIgnore
    @OneToOne(mappedBy = "user")
    private Flat flat;
}
