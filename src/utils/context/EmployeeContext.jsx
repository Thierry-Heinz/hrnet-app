import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [lastAddedEmployee, setLastAddedEmployee] = useState();
  console.log(employees);

  const handleEmployee = (employee) => {
    console.log(employee);

    setLastAddedEmployee(employee);

     setEmployees([
      ...employees,
      employee
    ]);


  }
  return (
    <EmployeeContext.Provider value={{ employees, handleEmployee, lastAddedEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
