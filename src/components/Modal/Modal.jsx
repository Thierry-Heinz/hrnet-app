import { useContext } from "react";
import { ModalContext } from "../../utils/context/ModalContext";
import { EmployeeContext } from "../../utils/context/EmployeeContext";
import { ModalStyled, ModalWrapper, OverlayStyled } from "./style";

const Modal = () => {
  const { isModalOpen, handleModal } = useContext(ModalContext);
  const { lastAddedEmployee } = useContext(EmployeeContext);

  console.log(isModalOpen);

  return (
    <ModalWrapper>
      <OverlayStyled {...{ isModalOpen }} onClick={handleModal}></OverlayStyled>
      <ModalStyled {...{ isModalOpen }}>
        {lastAddedEmployee &&
          ` Employee added to the list ${lastAddedEmployee.firstName} ${lastAddedEmployee.firstName}`}
        <button onClick={handleModal}>X</button>
      </ModalStyled>
    </ModalWrapper>
  );
};
export default Modal;
