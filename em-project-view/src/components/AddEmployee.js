import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

export const AddEmployee = () => {
  const navigate = useNavigate();

  //UPDATING THE STATE OF employee USING useState
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  //SET VALUE IN PARTICULAR KEY
  const handleChange = (event) => {
    const value = event.target.value;
    setEmployee({ ...employee, [event.target.name]: value });
  };

  //TO CLEAR ALL VALUES
  const reset = (event) => {
    event.preventDefault();
    setEmployee({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  //TO SAVE THE USER INPUT VALUES IN MYSQL DATABASE USING SPRING BOOT BACKEND
  const saveEmployee = (event) => {
    event.preventDefault();
    //CALL saveEmployee METHOD IN EmployeeService CLASS AND PASS THE employee DATA
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
        <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
          <p>Add NEW EMPLOYEE</p>
        </div>

        <div className="mx-10 my-2">
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={(event) => {
              handleChange(event);
            }}
            className="w-full py-2 my-4 text-slate-800"
            placeholder="Name"
          ></input>
          <input
            type="number"
            name="phone"
            value={employee.phone}
            onChange={(event) => {
              handleChange(event);
            }}
            className="w-full py-2 my-4 text-slate-800"
            placeholder="Phone"
          ></input>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(event) => {
              handleChange(event);
            }}
            className="w-full py-2 my-4 text-slate-800"
            placeholder="Email"
          ></input>
        </div>

        <div className="flex my-4 space-x-4 px-20">
          <button
            onClick={(event) => {
              saveEmployee(event);
            }}
            className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded"
          >
            Save
          </button>
          <button
            onClick={(event) => {
              reset(event);
            }}
            className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded"
          >
            Clear
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
