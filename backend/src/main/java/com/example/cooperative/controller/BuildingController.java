package com.example.cooperative.controller;

import com.example.cooperative.model.Building;
import com.example.cooperative.repository.BuildingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class BuildingController {

    @Autowired
    BuildingRepository buildingRepository;

    @GetMapping("/building/getall")
    public List<Building> getBuildings() {
        return buildingRepository.findAll();
    }
    
    @GetMapping("/building/getById/{id}")
    public Optional<Building> getBuilding(@PathVariable("id") long id) {
        return buildingRepository.findById(id);
    }

    @PostMapping("/building/add")
    public ResponseEntity<Building> addBuilding(@RequestBody Building building)
    {
        return ResponseEntity.ok(buildingRepository.save(building));
    }

    @PutMapping("/building/edit")
    public ResponseEntity<Building> editBuilding(@RequestBody Building building)
    {
        return ResponseEntity.ok(buildingRepository.save(building));
    }

    @DeleteMapping("/building/delete/{id}")
    public void deleteBuilding(@PathVariable("id") long id)
    {
        buildingRepository.deleteById(id);
    }
}
