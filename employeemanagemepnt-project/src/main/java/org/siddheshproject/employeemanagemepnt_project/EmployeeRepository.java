package org.siddheshproject.employeemanagemepnt_project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//public interface EmployeeRepository extends JpaRepository<ENTITY CLASS NAME, PRIMARY ID DATATYPE>
//WE HAD USE INTERFACE BECUASE FROM JpaRepository WE ARE GETTING ALL METHODS as save, findAll, findById AND JUST WE NEED TO IMPLEMENT OR INTIALIZE IT IN SERVICE LAYER

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
  
}
