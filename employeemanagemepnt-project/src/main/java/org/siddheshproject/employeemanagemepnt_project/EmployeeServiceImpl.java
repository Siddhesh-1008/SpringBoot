/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package org.siddheshproject.employeemanagemepnt_project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
//BASICALLY INTIALIZE ALL ABSTRACT METHODS OF EmployeeService INTERFACE
class EmployeeServiceImpl implements  EmployeeService{

  // CREATE LIST TO STRORE CLASS Employee object
  List<Employee> employees = new ArrayList<>();

  //CREATING EMPLOYEE OBJECT
  @Override
  public String createEmployee(Employee employee){
    employees.add(employee);
    return "ADDED EMPLOYEE AND SAVED SUCCESSFULLY";
  };

  //VIEWING ALL EMPLOYEES
  @Override
  public List<Employee> readEmployees()
  {
    return employees;
  }


  //DELETING EMPLOYEES
 
  @Override
  public boolean deleteEmployee(Long id){ 
    return employees.removeIf(employee -> employee.getId().equals(id));
  };

}
