package com.example.application.repository;

import com.example.application.model.Airport;
import com.example.application.model.AirportDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AirportRepository extends JpaRepository<Airport, Long> {
    List<AirportDto> findBy();
}
