package com.example.application.services;

import com.example.application.model.Airport;
import com.example.application.model.AirportDto;
import com.example.application.repository.AirportRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@BrowserCallable
@AnonymousAllowed
public class AirportService {

    @Autowired
    private AirportRepository airportRepository;

    public List<Airport> findAll() {
        return airportRepository.findAll();
    }

    public List<AirportDto> findAllDto() {
        return airportRepository.findBy();
    }

    public void deleteById(Long id) {
        airportRepository.deleteById(id);
    }

    public Airport save(AirportDto airportDto) {
        Airport airport = Airport.fromDto(airportDto);
        return airportRepository.save(airport);
    }
}
