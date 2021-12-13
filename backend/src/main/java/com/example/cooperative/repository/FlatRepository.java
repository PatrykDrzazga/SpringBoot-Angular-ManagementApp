package com.example.cooperative.repository;

import com.example.cooperative.model.Flat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlatRepository extends JpaRepository <Flat, Long> {
}