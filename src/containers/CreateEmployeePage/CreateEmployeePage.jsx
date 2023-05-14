import React, { useContext } from "react";
import { NavContext } from "../../utils/context/NavigationContext";
import Modal from "../../components/Modal/Modal";
import Forms from "../../components/Forms/Forms";
import { MainCreatePageStyled } from "./style";



const CreateEmployeePage = () => {
  return (
    <MainCreatePageStyled>
      <h2>Create a new Employee</h2>   
      <Forms />
      <Modal />
      </MainCreatePageStyled>
    
  );
};
export default CreateEmployeePage;
