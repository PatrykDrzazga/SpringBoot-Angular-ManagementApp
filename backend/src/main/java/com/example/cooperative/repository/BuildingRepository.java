package com.example.cooperative.repository;

import com.example.cooperative.model.Authorities;
import com.example.cooperative.model.Building;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuildingRepository extends JpaRepository <Building, Long> {
}
