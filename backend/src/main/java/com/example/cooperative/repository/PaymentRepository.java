package com.example.cooperative.repository;

import com.example.cooperative.model.Payment;
import com.example.cooperative.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository <Payment, Long> {
    public List<Payment> findAllByUser(User user);
}
