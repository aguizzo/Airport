package com.example.application.model;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Airport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Nonnull // For TypeScript, otherwise it will be type of number | undefined
    private Long id;
    @Nonnull
    private String name;
    @Nonnull
    private String code;
    @Nonnull
    private String city;
    @Nonnull
    private String country;
}
