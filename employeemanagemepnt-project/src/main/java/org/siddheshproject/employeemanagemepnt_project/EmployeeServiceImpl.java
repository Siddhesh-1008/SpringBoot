/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package org.siddheshproject.employeemanagemepnt_project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
//BASICALLY INTIALIZE ALL ABSTRACT METHODS OF EmployeeService INTERFACE
class EmployeeServiceImpl implements  EmployeeService{


  //GET EmployeeRepository AND MAKE OBJECT OF IT TO INITIALIZE METHODS such as save, findAll, findById
  @Autowired
  private EmployeeRepository employeeRepository;
  
  // CREATE LIST TO STRORE CLASS Employee object
  //List<Employee> employees = new ArrayList<>();

  //CREATING EMPLOYEE OBJECT
  @Override
  public String createEmployee(Employee employee){
    EmployeeEntity employeeEntity=new EmployeeEntity();
    //TO COPY Employee MODEL DATA INTO EmployeeEntity CLASS
    BeanUtils.copyProperties(employee, employeeEntity);
    //PUSH ALL EMPLOYEE DATA TO TABLE USING REPOSITORY METHODS
    employeeRepository.save(employeeEntity);
    return "ADDED EMPLOYEE AND SAVED SUCCESSFULLY";
  };


  //READ PARTICULAR EMPLOYEE
  @Override
  public Employee readEmployee(Long id) {
    //GET PARTICUALR EMPLOYEENTITY WITH THE HELP OF ID
    EmployeeEntity employeeEntity=employeeRepository.findById(id).get();
    //NOW COPY employeeEntity DATA INTO employee MODEL
    Employee employee=new Employee();
    BeanUtils.copyProperties(employeeEntity,employee);
    return employee;
  };


  //VIEWING ALL EMPLOYEES
  @Override
  public List<Employee> readEmployees()
  {
    //GET ALL THE COLUMN VALUES FROM EmployeeENITITY CLASS 
    List<EmployeeEntity> employeeList=employeeRepository.findAll();
    //TOS TORE THE NEW emp OBJECT
    List<Employee> employees=new ArrayList<>();

    //FOR TRAVERSING EACH ENTITY AND THEN STORE IT IN List<Employee> employees
    for(EmployeeEntity employeeEntity:employeeList)
    {
      System.out.println(employeeEntity);
      //ENITY DATA IN MODEL
      Employee emp=new Employee();
      emp.setId(employeeEntity.getId());
      emp.setName(employeeEntity.getName());
      emp.setEmail(employeeEntity.getEmail());
      emp.setPhone(employeeEntity.getPhone());
      employees.add(emp);
    }
    System.out.println(employees);
    return employees;
  }


  //DELETING EMPLOYEES
  @Override
  public boolean deleteEmployee(Long id){ 
    //FIRST GET ENITY WITH THE HELP OF ID AND THEN WITH THE HELP OF REPSOITRY DELETE WHOLE ENITTY
    EmployeeEntity emp =employeeRepository.findById(id).get();
    employeeRepository.delete(emp);
    return true;
  }

  //UPDATING EMPLOYEES
  @Override
  public String updateEmployee(Long id, Employee employee) {
    EmployeeEntity existingEmployee=employeeRepository.findById(id).get();
    //MODEL DATA IN ENTITY
    existingEmployee.setName(employee.getName());
    existingEmployee.setEmail(employee.getEmail());
    existingEmployee.setPhone(employee.getPhone());
    //SAVING UPDATED ENTITY USING REPSOITORY
    employeeRepository.save(existingEmployee);

    return "UPDATED SUCCESSFULLY";
  }


  
  

}
