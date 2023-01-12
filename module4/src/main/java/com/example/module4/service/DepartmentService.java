package com.example.module4.service;

import com.example.module4.model.Department;
import com.example.module4.repository.IDepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService {
    @Autowired
    private IDepartmentRepository departmentRepository;
    public Iterable<Department> findALl(){
        return departmentRepository.findAll();
    }
}
