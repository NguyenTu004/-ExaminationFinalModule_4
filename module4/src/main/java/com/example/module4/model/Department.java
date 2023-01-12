package com.example.module4.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id ;
    private String name ;
}
