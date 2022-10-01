import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  padding: 18px 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
