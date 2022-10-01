import styled from "styled-components";

export const StyledTotalCart = styled.div`
  padding: 20px 10px;
  background-color: var(--color-gray-0);
  border-top: 2px solid var(--color-gray-20);

  .total__container {
    display: flex;
    justify-content: space-between;
  }

  .total__container span {
    font-size: var(--sz-text-2);
    font-weight: var(--font-weg-600);
  }

  .total__container span:last-child {
    color: var(--color-gray-50);
  }

  button {
    width: 100%;
    margin-top: 22px;
  }
`;
