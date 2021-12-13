package com.example.cooperative.model;

import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "flats")
public class Flat {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "number")
    private int number;

    @ManyToOne
    @JoinColumn(name = "buildingid", referencedColumnName = "id")
    private Building building;

    @OneToOne
    @JoinColumn(name = "tenantid", referencedColumnName = "id")
    private User user;
}
