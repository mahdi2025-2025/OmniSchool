package com.omnischool.entity;

import com.omnischool.enums.SchoolPlan;
import com.omnischool.enums.SchoolType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * School entity.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "schools")
public class School {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String address;

    private String city;

    private String phone;

    private String email;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SchoolType type;

    private Integer totalStudents;

    private Integer totalTeachers;

    @Enumerated(EnumType.STRING)
    private SchoolPlan plan;

    private LocalDate subscriptionStartDate;

    private LocalDate subscriptionEndDate;

    @Builder.Default
    @Column(nullable = false)
    private Boolean isActive = true;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    void onCreate() {
        this.createdAt = LocalDateTime.now();
        if (isActive == null) isActive = true;
    }
}
