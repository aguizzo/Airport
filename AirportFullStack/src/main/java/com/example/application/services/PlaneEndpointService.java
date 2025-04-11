package com.example.application.services;

import com.example.application.model.Plane;
import com.example.application.model.PlaneDto;
import com.example.application.repository.PlaneRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@BrowserCallable
@AnonymousAllowed
public class PlaneEndpointService {

    @Autowired
    private PlaneRepository planeRepository;

    public List<Plane> findAll() {
        return planeRepository.findAll();
    }

    public List<PlaneDto> findAllDto() {
        return planeRepository.findBy();
    }

    public void deleteById(String id) {
        planeRepository.deleteById(id);
    }

    public Plane save(PlaneDto planeDto) {
        Plane plane = Plane.fromDto(planeDto);
        return planeRepository.save(plane);
    }

    public Plane update(PlaneDto planeDto, String id) {
        Optional<Plane> plane = planeRepository.findById(id);
        if (plane.isPresent()) {
            Plane updatedPlane = plane.get();
            updatedPlane.setModel(planeDto.model());
            updatedPlane.setManufacturer(planeDto.manufacturer());
            updatedPlane.setRegistrationNumber(planeDto.registrationNumber());
            updatedPlane.setCapacity(planeDto.capacity());
            return planeRepository.save(updatedPlane);
        }
        else {
            return save(planeDto);
        }
    }
}
