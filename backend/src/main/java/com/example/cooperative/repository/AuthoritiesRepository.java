package com.example.cooperative.repository;

import com.example.cooperative.model.Authorities;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthoritiesRepository extends JpaRepository <Authorities, String> {
}
