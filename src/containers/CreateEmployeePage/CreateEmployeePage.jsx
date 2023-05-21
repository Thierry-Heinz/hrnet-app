import Modal from "../../components/Modal/Modal";
import Forms from "../../components/Forms/Forms";
import { MainCreatePageStyled, StyledLink, WrapperStyled } from "./style";
import Header from "../../components/Header/Header";

const CreateEmployeePage = () => {
  return (
    <WrapperStyled>
      <Header />
      <MainCreatePageStyled>
        <h2>Create a new Employee</h2>
        <Forms />
        <Modal />
      </MainCreatePageStyled>
      <StyledLink to="/employee-list">View Current Employees</StyledLink>
    </WrapperStyled>
  );
};
export default CreateEmployeePage;
