import { createContext, useState } from "react";
import FakeData from "../../data/example.json";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(FakeData);
  const [lastAddedEmployee, setLastAddedEmployee] = useState();

  const handleEmployee = (employee) => {
    console.log(employee);

    setLastAddedEmployee(employee);

    setEmployees([...employees, employee]);
  };
  return (
    <EmployeeContext.Provider
      value={{ employees, handleEmployee, lastAddedEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
