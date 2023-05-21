import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    width: 100%;
    display: flex;
    gap: 10px;
    margin-top: 1rem;
    height: 2rem;
    align-items: baseline;

    span {
      color: var(--grey);
      width: 7em;
    }
    input {
      width: 100%;
      height: 100%;
      border: 1px solid var(--light-grey);
      border-radius: 0.15em;
      padding: 0 0.5rem;
    }
    select {
      border: 1px solid var(--light-grey);
      height: 100%;
      border-radius: 0.15em;
      width: 100%;
      padding: 0 0.5rem;
    }
  }

  &:last-child {
    margin-top: 0;
  }

  fieldset {
    width: calc(100% - 2em);
    margin: 1em 0;
    padding-bottom: 1em;
    border-color: #c4c4c4; // var(--light-grey);
    border-style: solid;
    border-width: 1px;
    border-radius: 0.5em;
    legend {
      font-weight: 300;
      font-size: 1.5rem;
    }
  }

  input[type="submit"] {
    width: 100%;
    margin-top: 2em;
    height: 3rem;
    border: none;
    background-color: var(--secondary);
    font-weight: 300;
    font-size: 1.5rem;
    color: var(--white);
    border-radius: 0.25em;
    text-transform: uppercase;
    transition: all 0.25s ease-in-out;
    &:hover,
    &:active {
      cursor: pointer;
      background-color: var(--primary);
    }
  }
`;
