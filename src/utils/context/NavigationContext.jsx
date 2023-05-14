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