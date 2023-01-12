package com.example.module4.repository;

import com.example.module4.model.Department;
import com.example.module4.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IEmployeeRepository extends JpaRepository<Employee,Long> {
    Iterable<Employee> findAllByOrderByAgeDesc();
    Iterable<Employee> findAllByOrderByAgeAsc();
    Iterable<Employee> findAllByDepartment(Department department);
}
