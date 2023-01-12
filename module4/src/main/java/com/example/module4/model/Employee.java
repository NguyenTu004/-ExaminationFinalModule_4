package com.example.module4.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id ;
    private String code ;
    private String name ;
    private int age ;
    private double salary;
    @ManyToOne
    private Department department ;
}
