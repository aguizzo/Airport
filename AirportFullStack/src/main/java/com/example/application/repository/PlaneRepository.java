package com.example.application.repository;

import com.example.application.model.Plane;
import com.example.application.model.PlaneDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaneRepository extends JpaRepository<Plane, String> {
    List<PlaneDto> findBy();
}
