package com.example.application.services;

import com.example.application.model.Airport;
import com.example.application.model.AirportDto;
import com.example.application.repository.AirportRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@BrowserCallable
@AnonymousAllowed
public class AirportEndpointService {

    @Autowired
    private AirportRepository airportRepository;

    public List<Airport> findAll() {
        return airportRepository.findAll();
    }

    public List<AirportDto> findAllDto() {
        return airportRepository.findBy();
    }

    public void deleteById(String id) {
        airportRepository.deleteById(id);
    }

    public Airport save(AirportDto airportDto) {
        Airport airport = Airport.fromDto(airportDto);
        return airportRepository.save(airport);
    }

    public Airport update(AirportDto airportDto, String id) {
        Optional<Airport> airport = airportRepository.findById(id);
        if (airport.isPresent()) {
            Airport updatedAirport = airport.get();
            updatedAirport.setName(airportDto.name());
            updatedAirport.setCode(airportDto.code());
            updatedAirport.setCity(airportDto.city());
            updatedAirport.setCountry(airportDto.country());
            return airportRepository.save(updatedAirport);
        }
        else {
            return save(airportDto);
        }
    }
}
