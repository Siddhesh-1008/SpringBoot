import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

export const EmployeeList = () => {
  const navigate = useNavigate();

  //WE GET RESPONSE IN ARRAYS OF OBJECTS [{}]
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  //TO GET EMPLOYEE DATA AUTOMATICALLY AT EVERY INTIAL(STARTING OR FOR THE FIRST TIME) COMPONENT GETS RENDERED
  //WHEN DATA GETS FAIL SET LOADING TO TRUE AND FOR SUCCESS SET TO FALSE
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true while fetching
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Set loading to false after fetching completes
      }
    };
    fetchData();
  }, []);

  //DELTING EMPLOYEE
  //HERE prevElement CONTAIN ARRAY OF OBJECTS [{},{}] FILTER IS USED TO GET/TRAVERSE EACH OBJECT AND THEN CHECK EACH OBJECT ID WITH ID PROVIDED BY FUNCITON IF IT DOESNT MATCH MEANS TRUE DONT DELTE THAT OBJECT IF IT GET MATCHED THEN FALSE REMOVE THE OBJECT AND MAKE UPDATEION IN ARRAY OF OBJECTS
  const deleteEmployee = (event, id) => {
    event.preventDefault();
    EmployeeService.deleteEmployeeById(id).then(() => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id != id);
        });
      }
    });
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div>
          {/* BUTTON FOR ADDING EMPLOYEE */}
          <button
            className="bg-slate-600 hover:bg-blue-700 my-12 font-semibold px-20 py-2 rounded"
            onClick={() => {
              navigate("/addEmployee");
            }}
          >
            {" "}
            👨‍💻ADD EMPLOYEE
          </button>
        </div>

        <div>
          <table>
            <thead className="bg-slate-600">
              <th className="px-6 py-3 uppercase tracking-wide">Name</th>
              <th className="px-6 py-3 uppercase tracking-wide">Phone</th>
              <th className="px-6 py-3 uppercase tracking-wide">Email</th>
              <th className="px-6 py-3 uppercase tracking-wide">Action</th>
            </thead>

            {/* IF LOADING IS TRUE MEANS DATA FAILED THEN HERE IT WILL CONVERT TO FALSE AND WILL NOT LOAD ANYTHING 
            IF WE GET DATA THEN HERE IT WILL BE TRUE THEN IT WILL RENDER THE JSX   */}
            {!loading && (
              <tbody>
                {employees.map((employee) => (
                  <tr className="hover:bg-white hover:text-black">
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      {employee.name}
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      {employee.phone}
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      {employee.email}
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      <button>Edit ✏️</button>
                      <button
                        onClick={(event) => {
                          deleteEmployee(event, employee.id);
                        }}
                      >
                        {" "}
                        Delete 🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};
