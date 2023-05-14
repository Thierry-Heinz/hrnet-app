import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!isModalOpen);
    console.log("modal called !", isModalOpen);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
