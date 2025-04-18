package com.example.application.model;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Airport {

    @Id
    @Nonnull
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;
    @Nonnull
    private String name;
    @Nonnull
    private String code;
    @Nonnull
    private String city;
    @Nonnull
    private String country;

    public Airport(String name, String code, String city, String country) {
        this.name = name;
        this.code = code;
        this.city = city;
        this.country = country;
    }

    public static Airport fromDto(AirportDto airportDto) {
        return new Airport(airportDto.name(),
                airportDto.code(),
                airportDto.city(),
                airportDto.country());
    }
}
