import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateEmployeePage from "../containers/CreateEmployeePage/CreateEmployeePage";
import EmployeeListPage from "../containers/EmployeeListPage/EmployeeListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEmployeePage />,
  },
  {
    path: "/employee-list",
    element: <EmployeeListPage />,
  },
]);
