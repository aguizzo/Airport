package com.example.application.model;

public record PlaneDto(String model, String manufacturer, String registrationNumber, Integer capacity,
                       Integer yearOfManufacture) {
}
