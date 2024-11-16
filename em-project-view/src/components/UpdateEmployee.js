import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

export const UpdateEmployee = () => {
  const navigate = useNavigate();

  //GET THE EMPOLYE ID THROUGH URL
  const { id } = useParams();

  //UPDATING THE STATE OF employee USING useState
  const [employee, setEmployee] = useState({
    id: id,
    name: "",
    phone: "",
    email: "",
  });

  //SET VALUE IN PARTICULAR KEY
  const handleChange = (event) => {
    const value = event.target.value;
    setEmployee({ ...employee, [event.target.name]: value });
  };

  //TO GET EXISITING EMPLOYEE DATA AUTOMATICALLY AT EVERY INTIAL(STARTING OR FOR THE FIRST TIME) COMPONENT GETS RENDERED BASED ON THE ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //TO UPDATE THE EXISTING EMPLOYEE INPUT VALUES IN MYSQL DATABASE USING SPRING BOOT BACKEND
  const updateEmployee = (event) => {
    event.preventDefault();
    //CALL updateEmployee METHOD IN EmployeeService CLASS AND PASS THE employee DATA AND EMPLOYEE ID TO IT
    EmployeeService.updateEmployee(employee, id)
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
          <p>UPDATE EMPLOYEE</p>
        </div>

        <div className="mx-15 my-2">
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-semibold">Name:- </h1>
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
          </div>
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-semibold">Phone:- </h1>
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
          </div>
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-semibold">Email:- </h1>
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
        </div>

        <div className="flex my-4 space-x-4 px-20">
          <button
            onClick={(event) => {
              updateEmployee(event);
            }}
            className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded"
          >
            Update
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
