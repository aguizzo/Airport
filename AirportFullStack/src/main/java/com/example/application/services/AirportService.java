package com.example.application.services;

import com.example.application.model.Airport;
import com.example.application.repository.AirportRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//@Service
@BrowserCallable
@AnonymousAllowed
public class AirportService {

    @Autowired
    private AirportRepository airportRepository;

    public List<Airport> findAll() {
        return airportRepository.findAll();
    }

    public void deleteById(Long id) {
        airportRepository.deleteById(id);
    }

    public Airport save(Airport airport) {
        try {
            Airport savedAirport = airportRepository.save(airport);
            return savedAirport;
        }
        catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
