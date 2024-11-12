package org.siddheshproject.employeemanagemepnt_project;

//lombok:-it can automatically create getters, setters, and constructors for your classes, making your code shorter and easier to read.
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
  private Long id;
  private String name;
  private String phone;
  private String email;

}
