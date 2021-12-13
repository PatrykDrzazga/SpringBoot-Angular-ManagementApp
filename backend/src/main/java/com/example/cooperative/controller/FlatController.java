package com.example.cooperative.controller;

import com.example.cooperative.model.Flat;
import com.example.cooperative.repository.FlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class FlatController {

    @Autowired
    FlatRepository flatRepository;

    /*
    {
      "building": {
        "id": 3
      },
      "name": "Mieszkanie",
      "number": 1
    }
     */

    @GetMapping("/flat/getall")
    public List<Flat> getFlats() {
        return flatRepository.findAll();
    }
    
    @GetMapping("/flat/getById/{id}")
    public Optional<Flat> getFlat(@PathVariable("id") long id) {
        return flatRepository.findById(id);
    }

    @PostMapping("/flat/add")
    public ResponseEntity<Flat> addFlat(@RequestBody Flat flat)
    {
        return ResponseEntity.ok(flatRepository.save(flat));
    }

    @PutMapping("/flat/edit")
    public ResponseEntity<Flat> editFlat(@RequestBody Flat flat)
    {
        return ResponseEntity.ok(flatRepository.save(flat));
    }

    @DeleteMapping("/flat/delete/{id}")
    public void deleteFlat(@PathVariable("id") Long Id)
    {
        flatRepository.deleteById(Id);
    }
}
