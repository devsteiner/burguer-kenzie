import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  width: 100%;
  gap: 20px;
  overflow-x: scroll;
  padding: 5px;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    flex-wrap: wrap;
    max-width: 950px;
  }
`;
