package org.siddheshproject.employeemanagemepnt_project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmpController {

  

  @Autowired
  EmployeeServiceImpl employeeSerivce;
  

  //GET ALL EMPLOYEE DATA
  @GetMapping("employees")
  public List<Employee> getAllEmployees() {
    return employeeSerivce.readEmployees();
  }
  
  
  //CREATE EMPLOYEE DATA
  //THIS METHOD IS ASCCEPTION JSON OBJECT AS PARAMETER{KEY:VALUE}
  @PostMapping("employees")
  public String createEmployee(@RequestBody Employee employee) {
    //CALL createEmployee(employee) AND ADD Employee CLASS object TO employees LIST
    String empdata=employeeSerivce.createEmployee(employee);
    return empdata;
  }
  

  //DLETE PARTICULAR ID
  @DeleteMapping("employees/{id}")
  public String deleteEmployee(@PathVariable Long id)
  {
    if(employeeSerivce.deleteEmployee(id)){
      return "EMPLOYEED DELETED SUCCESFULLY";
    }
    return "NOT FOUND";
  }
  

  //1:44:27
   


}
