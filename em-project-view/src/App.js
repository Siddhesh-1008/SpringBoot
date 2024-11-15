import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddEmployee } from "./components/AddEmployee";
import { EmployeeList } from "./components/EmployeeList";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
      {/* 47.20 */}
    </>
  );
}

export default App;
