import CreateEmployeePage from "../CreateEmployeePage/CreateEmployeePage";
import EmployeeListPage from "../EmployeeListPage/EmployeeListPage";
import { NavContext } from "../../utils/context/NavigationContext";
import React, { useContext } from "react";

import {
  WrapperStyled,
  HeaderWrapperStyled,
  HeaderStyled,
} from "../HomePage/style";

const App = () => {
  const { isActive, toggle } = useContext(NavContext);

  return (
    <WrapperStyled>
      <HeaderWrapperStyled>
        <HeaderStyled>
          <h1>HRNet</h1>
          <button onClick={() => toggle(!isActive)}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </HeaderStyled>
      </HeaderWrapperStyled>
      {isActive ? <CreateEmployeePage /> : <EmployeeListPage />}
    </WrapperStyled>
  );
};
export default App;
