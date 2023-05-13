import React, { useContext } from "react";
import { EmployeeContext, NavContext } from "../utils/context";
import FakeData from '../data/example.json';
import {TableGenerator} from 'hrnet-tablegenerator';

const EmployeeListPage = () => {
  const { isActive, toggle } = useContext(NavContext);
  const { employees } = useContext(EmployeeContext);

  const tableNodes = {
    columns: [
      {
        key: "firstName",
        label: "First Name"
      },
      {
        key: "lastName",
        label: "Last Name"
      },
      {
        key: "dateOfBirth",
        label: "Date of Birth"
      },
      {
        key: "startDate",
        label: "Start Date"
      },
      {
        key: "department",
        label: "Department"
      },
      {
        key: "street",
        label: "Street"
      },
      {
        key: "city",
        label: "City"
      },
      {
        key: "state",
        label: "State"
      },
      {
        key: "zipCode",
        label: "Zip Code"
      }
    ],
    nodes: FakeData
  };

  return (
    <div>
      <h1>EmployeeListPage</h1>
      <button onClick={() => toggle(!isActive)}>Home</button>
      <TableGenerator data={tableNodes} />
    </div>
  );
};
export default EmployeeListPage;
