package com.example.module4.controller;

import com.example.module4.model.Employee;
import com.example.module4.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<Iterable<Employee>> findALl(){
        return new ResponseEntity<>(employeeService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Employee>> findById(@PathVariable Long id){
        return new ResponseEntity<>(employeeService.findById(id), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Employee> save(@RequestBody Employee employee){
        return new ResponseEntity<>(employeeService.save(employee),HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> delete(@PathVariable Long id){
        employeeService.delete(id);
        return new ResponseEntity<>(new Employee(),HttpStatus.OK);
    }
    @GetMapping("/sort/{sort}")
    public ResponseEntity<Iterable<Employee>> findALlSort(@PathVariable String sort){
        return new ResponseEntity<>(employeeService.findAllSort(sort), HttpStatus.OK);
    }
    @GetMapping("/department/{id}")
    public ResponseEntity<Iterable<Employee>> findALlSort(@PathVariable Long id){
        return new ResponseEntity<>(employeeService.findAllByDepartment(id), HttpStatus.OK);
    }
}
