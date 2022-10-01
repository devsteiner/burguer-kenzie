import styled from "styled-components";

export const StyledContainerFull = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 1024px) {
    max-width: 1420px;
    padding: 0 40px;
  }
`;

export const StyledContainerList = styled.div`
  width: 100%;
  max-width: 950px;
`;
