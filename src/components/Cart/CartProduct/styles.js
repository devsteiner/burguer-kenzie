import styled from "styled-components";

export const StyledCartProduct = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .content-product__container {
    display: flex;
    align-items: flex-start;
    height: 80px;
    gap: 10px;
  }

  .content__img {
    height: 80px;
    width: 80px;
    background-color: var(--color-gray-20);
    border-radius: var(--bd-radius-1);
  }

  .content__img img {
    width: 100%;
  }

  .content__info h3 {
    font-size: var(--sz-text-1);
    font-weight: var(--font-weg-700);
    margin-bottom: 10px;
  }

  .content__info span {
    font-size: var(--sz-text-2);
    color: var(--color-gray-50);
  }

  .content__count {
    margin-top: 10px;
  }

  .content__count button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  .content__count {
    font-weight: var(--font-weg-600);
    font-size: 14px;
    color: var(--color-primary);
  }

  .button__rmv {
    color: var(--color-gray-50);
    font-size: var(--sz-text-3);
    font-weight: var(--font-weg-500);
  }

  .button__rmv::after {
    content: "";
    margin-top: 1px;
    display: block;
    width: 0%;
    height: 2px;
    background-color: var(--color-gray-50);
    transition-duration: 0.2s;
  }

  .button__rmv:hover::after {
    width: 100%;
  }
`;
