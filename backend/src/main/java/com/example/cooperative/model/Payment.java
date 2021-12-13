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
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "payerid", referencedColumnName = "id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "flatid", referencedColumnName = "id")
    private Flat flat;

    @Column(name = "amount")
    private Long amount;

    @Column(name = "description")
    private String description;
}
