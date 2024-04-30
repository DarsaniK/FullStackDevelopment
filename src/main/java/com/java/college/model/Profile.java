package com.java.college.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String fatherName;
    private String motherName;
    private String gender;
    private String nationality;
    private String dateOfBirth;
    private String degree;
    private String address;
    private String mobileNumber;
    private double tenthMark;
    private double twelfthMark;
    private double diplomaMark;
}
