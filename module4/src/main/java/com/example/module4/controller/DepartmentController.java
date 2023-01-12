package com.example.module4.controller;

import com.example.module4.model.Department;
import com.example.module4.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/department")
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;
    @GetMapping
    private ResponseEntity<Iterable<Department>> findAll(){
        return new ResponseEntity<>(departmentService.findALl(), HttpStatus.OK);
    }
}
