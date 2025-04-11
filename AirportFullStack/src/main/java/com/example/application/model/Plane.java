package com.example.application.model;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Plane {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Nonnull
    private String id;
    @Nonnull
    private String model;
    @Nonnull
    private String manufacturer;
    @Nonnull
    private String registrationNumber;
    @Nonnull
    private Integer capacity;
    @Nonnull
    private Integer yearOfManufacture;

    public Plane(String model, String manufacturer, String registrationNumber, Integer capacity, Integer yearOfManufacture) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.registrationNumber = registrationNumber;
        this.capacity = capacity;
        this.yearOfManufacture = yearOfManufacture;
    }

    public static Plane fromDto(PlaneDto planeDto) {
        return new Plane(planeDto.model(),
                planeDto.manufacturer(),
                planeDto.registrationNumber(),
                planeDto.capacity(),
                planeDto.yearOfManufacture());
    }
}
