import React, { useContext } from "react";
import { EmployeeContext } from "../../utils/context/EmployeeContext";
import FakeData from "../../data/example.json";
import { TableGenerator } from "hrnet-tablegenerator";
import { MainListPageStyled, TableGeneratorWrapperStyled } from "./style";

const EmployeeListPage = () => {
  const { employees } = useContext(EmployeeContext);

  const tableNodes = {
    columns: [
      {
        key: "firstName",
        label: "First Name",
      },
      {
        key: "lastName",
        label: "Last Name",
      },
      {
        key: "dateOfBirth",
        label: "Date of Birth",
      },
      {
        key: "startDate",
        label: "Start Date",
      },
      {
        key: "department",
        label: "Department",
      },
      {
        key: "street",
        label: "Street",
      },
      {
        key: "city",
        label: "City",
      },
      {
        key: "state",
        label: "State",
      },
      {
        key: "zipCode",
        label: "Zip Code",
      },
    ],
    nodes: employees,
  };

  return (
    <MainListPageStyled>
      <h2>All the employees</h2>
      <TableGeneratorWrapperStyled>
        <TableGenerator data={tableNodes} />
      </TableGeneratorWrapperStyled>
    </MainListPageStyled>
  );
};
export default EmployeeListPage;
