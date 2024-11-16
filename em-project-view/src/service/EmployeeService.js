import axios from "axios";
const EMPLOYEE_S_API_BASE_URL = "http://localhost:8080/employees";

class EmployeeService {
  //POSITNG EMPLOYEE DATA
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_S_API_BASE_URL, employee);
  }

  //GETING EMPLOYEE DATA
  getEmployees() {
    return axios.get(EMPLOYEE_S_API_BASE_URL);
  }

  //UPDATAING EMPLOYEE DATA
  updateEmployee(employee, id) {
    return axios.put(EMPLOYEE_S_API_BASE_URL + "/" + id, employee);
  }

  //DELETING EMPLOYEE DATA
  deleteEmployeeById(id) {
    return axios.delete(EMPLOYEE_S_API_BASE_URL + "/" + id);
  }

  //GET EMPLOYEE DATA BY ID
  getEmployeeById(id) {
    return axios.get(EMPLOYEE_S_API_BASE_URL + "/" + id);
  }
}

export default new EmployeeService();
