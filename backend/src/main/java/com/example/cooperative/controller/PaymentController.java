package com.example.cooperative.controller;

import com.example.cooperative.model.Building;
import com.example.cooperative.model.Payment;
import com.example.cooperative.model.User;
import com.example.cooperative.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class PaymentController {

    @Autowired
    PaymentRepository paymentRepository;

    /*
        {
          "amount": 1250,
          "description": "Payment for first month",
          "flat": {
            "id": 7
          },
          "user": {
            "id": 1
          }
        }
     */

    @GetMapping("/payment/getall")
    public List<Payment> getPayments() {
        return paymentRepository.findAll();
    }

    @PostMapping("/payment/getByUser")
    public List<Payment> getPaymentsByUser(@RequestBody User user) {
        return paymentRepository.findAllByUser(user);
    }

    @PostMapping("/payment/add")
    public ResponseEntity<Payment> addPayment(@RequestBody Payment payment)
    {
        return ResponseEntity.ok(paymentRepository.save(payment));
    }

    @PutMapping("/payment/edit")
    public ResponseEntity<Payment> editPayment(@RequestBody Payment payment)
    {
        return ResponseEntity.ok(paymentRepository.save(payment));
    }

    @DeleteMapping("/payment/delete/{id}")
    public void deletePayment(@PathVariable("id") Long Id)
    {
        paymentRepository.deleteById(Id);
    }
}
