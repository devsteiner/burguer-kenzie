import styled from "styled-components";

export const StyledInfoSearch = styled.section`
  margin-top: 24px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: var(--font-weg-700);
    font-size: var(--sz-title-1);

    span {
      color: var(--color-gray-50);
    }
  }

  button {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 6px;
    button {
      display: block;
    }
  }
`;
