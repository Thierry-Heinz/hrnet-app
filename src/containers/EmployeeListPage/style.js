import styled from "styled-components";

export const MainListPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  margin: auto;
  width: 100%;
`;

export const TableGeneratorWrapperStyled = styled.div`
  table#employee-table {
    border: none;
    border-spacing: 0;
    margin: 2em 0;
    width: 100%;
    thead {
      th {
        font-size: 1rem;
        padding-bottom: 1rem;
        color: var(--dark-grey);
        font-weight: 500;
      }
    }
    tbody {
      border: none;

      & tr {
        border: 0;
        margin-bottom: 0.5rem;
        & th {
          color: var(--grey);
          font-weight: 500;
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
`;
