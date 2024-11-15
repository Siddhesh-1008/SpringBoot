import React from "react";
import { useNavigate } from "react-router-dom";

export const EmployeeList = () => {
  const navigate = useNavigate();
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

            <tbody>
              <tr className="hover:bg-white hover:text-black">
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  Siddhesh
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  7400208280
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  sid@gmail.ocm
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <a>Edit ✏️</a>
                  <a>Delete 🗑️</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
