import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;

  .products-cart__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 15px;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 31px;
    }
  }
`;
