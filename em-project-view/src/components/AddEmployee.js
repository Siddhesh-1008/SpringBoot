import React from "react";

export const AddEmployee = () => {
  return (
    <>
      <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
        <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
          <p>Add NEW EMPLOYEE</p>
        </div>

        <div className="mx-10 my-2">
          <input
            className="w-full py-2 my-4 text-slate-800"
            placeholder="Name"
          ></input>
          <input
            className="w-full py-2 my-4 text-slate-800"
            placeholder="Phone"
          ></input>
          <input
            className="w-full py-2 my-4 text-slate-800"
            placeholder="Email"
          ></input>
        </div>

        <div className="flex my-4 space-x-4 px-20">
          <button className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded">
            Save
          </button>
          <button className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded">
            Clear
          </button>
          <button className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
