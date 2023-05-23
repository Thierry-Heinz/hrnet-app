import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainCreatePageStyled = styled.main`
  max-width: var(--max-width);
  margin: auto;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--grey);
  text-decoration: none;
  text-align: center;
  margin-top: 1rem;
  &:hover {
    color: var(--dark-grey);
  }
`;
