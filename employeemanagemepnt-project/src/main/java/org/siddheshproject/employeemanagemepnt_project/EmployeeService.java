package org.siddheshproject.employeemanagemepnt_project;

import java.util.List;

public interface  EmployeeService {
  //WRITE ALL CRUD CODE LOGIC
  String createEmployee(Employee employee);
  List<Employee> readEmployees();
  boolean deleteEmployee(Long id);
}
