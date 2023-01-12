package com.example.module4.service;

import com.example.module4.model.Department;
import com.example.module4.model.Employee;
import com.example.module4.repository.IDepartmentRepository;
import com.example.module4.repository.IEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private IEmployeeRepository employeeRepository;
    @Autowired
    private IDepartmentRepository departmentRepository;

    public Iterable<Employee> findAll(){
        return employeeRepository.findAll();
    }
    public Iterable<Employee> findAllSort(String sort){
        if(sort.equals("asc")){
            return employeeRepository.findAllByOrderByAgeAsc();
        }else if (sort.equals("desc")){
            return employeeRepository.findAllByOrderByAgeDesc();
        }else {
            return employeeRepository.findAll();
        }
    }
    public Optional<Employee> findById(long id){
        return employeeRepository.findById(id);
    }
    public Employee save(Employee employee){
        return employeeRepository.save(employee);
    }
    public void delete(Long id){
        employeeRepository.deleteById(id);
    }
    public Iterable<Employee> findAllByDepartment(Long id ){
        Optional<Department> department = departmentRepository.findById(id);
        if (department.isPresent()){
            return employeeRepository.findAllByDepartment(department.get());
        }else {
            return employeeRepository.findAll();
        }
    }
}
