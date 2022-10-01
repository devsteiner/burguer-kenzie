import styled from "styled-components";

export const StyledCartContainer = styled.aside`
  width: 100%;
  border-radius: var(--bd-radius-1);
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    max-width: 360px;
  }
`;

export const StyledCart = styled.div`
  width: 100%;

  h2 {
    color: var(--color-white);
    font-weight: var(--font-weg-700);
    font-size: var(--sz-title-2);
    background-color: var(--color-primary);
    padding: 22px 20px;
  }

  .content__container {
    min-height: 158px;
    max-height: 350px;
    background-color: var(--color-gray-0);
  }
`;

export const StyledCartList = styled.ul`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  max-height: 350px;
  overflow-y: scroll;
`;
