import styled from "styled-components";

export const ModalStyled = styled.div`
  position: absolute;
  top: 20%;
  width: 25em;
  height: min-content;
  margin: auto;
  background-color: var(--white);
  border-radius: 1em;
  padding: 1em;
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
  visibility: ${({ isModalOpen }) => (isModalOpen ? "visible" : "hidden")};
  /* display: ${({ isModalOpen }) => (isModalOpen ? "block" : "none")}; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: none;
    background-color: var(--black);
    color: var(--white);
    font-weight: 700;
    height: 2em;
    width: 2em;
    border-radius: 2em;
    transition: all 0.25s ease-in-out;
    &:hover {
      cursor: pointer;
      background-color: var(--dark-grey);
      color: var(--white);
      box-shadow: 0 0 0.5rem "black";
    }
  }
`;

export const OverlayStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
  visibility: ${({ isModalOpen }) => (isModalOpen ? "visible" : "hidden")};
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
