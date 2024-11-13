package org.siddheshproject.employeemanagemepnt_project;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

//Entity HELP TO MAP ALL THIS VARIABLES AS COLUMN VALUES IN emp_db TABLE
@Entity
@Data
@Table(name="emp_db")
public class EmployeeEntity {

  //PRIMARY KEY GENRATION
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long id;

  private String name;
  private String phone;
  private String email;
}
