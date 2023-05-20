import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapperStyled = styled.header`
  background-color: var(--primary);
  color: var(--white);
  border-bottom: 1px solid var(--secondary);
  box-shadow: 0 0.25rem 0.5rem var(--light-grey);
  margin-bottom: 2em;
`;

export const HeaderStyled = styled.div`
  max-width: var(--max-width);
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }

  h1 {
    font-size: 3rem;
  }

  button {
    background-color: var(--white);
    border: none;
    border-radius: 100%;
    height: 2.5em;
    width: 2.5em;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: 100%;
    box-shadow: 0 0 0.5rem "black";

    div {
      background-color: var(--secondary);
      height: 2px;
      width: 100%;
    }
    &:hover {
      cursor: pointer;
      background-color: #edeaea;
      div {
        background-color: var(--black);
      }
    }
  }
`;
