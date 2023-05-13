import React, { createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isActive, toggle] = useState(true);
  return (
    <NavContext.Provider value={{ isActive, toggle }}>
      {children}
    </NavContext.Provider>
  );
};

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  console.log(employees);
  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};
