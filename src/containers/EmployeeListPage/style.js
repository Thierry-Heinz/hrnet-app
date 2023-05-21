import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainListPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  margin: auto;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }
`;

export const TableGeneratorWrapperStyled = styled.div`
  #table_wrapper {
    border: none;
    border-spacing: 0;
    margin: 2em 0;
    width: 100%;
    font-family: "Inter", Arial, Helvetica, sans-serif;

    @media screen and (max-width: 600px) {
      overflow-x: scroll;
    }
    .table_header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      color: var(--secondary);
      #table_length label {
        display: flex;
        gap: 0.5rem;
      }
      #table_filter label {
        display: flex;
        gap: 0.5rem;
      }
    }
    .table_body {
      width: 100%;
      thead {
        tr {
          /* display: flex;
          align-items: center;
          width: 100%; */
          th {
            font-size: 1rem;
            color: var(--white);
            font-weight: 500;
            background-color: var(--secondary);
            padding: 0.25rem;
          }
        }
      }
      tbody {
        border: none;

        tr {
          border: 0;
          &:first-of-type {
            th {
              padding-top: 1rem;
            }
          }
          th {
            color: var(--grey);
            font-weight: 300;
            overflow: hidden;
            text-overflow: ellipsis;
            border: none;
            vertical-align: middle;
          }
          &:hover {
            background-color: #edeaea;
          }
        }
      }
    }
    .table_footer {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      color: var(--secondary);

      @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        .table_info {
          text-align: center;
        }
      }
      .table_paginate {
        display: flex;
        gap: 0.5rem;
        button {
          cursor: pointer;
          &:hover {
            color: var(--white);
            border: 2px solid rgb(95 158 160 / 75%);
            background-color: rgb(95 158 160 / 75%);
          }
        }
        span {
          display: flex;
          gap: 0.15rem;
          button {
            height: 2rem;
            width: 2rem;
            font-size: 1rem;
            font-weight: 700;
            vertical-align: baseline;
            border-radius: 2rem;
            background-color: var(--white);
            border: 2px solid var(--secondary);
            color: var(--secondary);
            &.current {
              color: var(--white);
              background-color: var(--secondary);
            }
          }
        }
        button.paginate_button {
          &.previous,
          &.next {
            font-size: 1rem;
            font-weight: 700;
            vertical-align: baseline;
            border-radius: 2rem;
            background-color: var(--white);
            border: 2px solid var(--secondary);
            color: var(--secondary);
            padding: 0 1.5rem;
            &:disabled {
              color: rgb(95 158 160 / 75%);
              border: 2px solid rgb(95 158 160 / 75%);
            }
            &:hover {
              color: var(--secondary);
              border: 2px solid var(--secondary);
            }
          }
        }
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  text-align: center;
  margin-top: 1rem;
  &:hover {
    color: var(--secondary);
  }
`;
