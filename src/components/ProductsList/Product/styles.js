import styled from "styled-components";

export const StyledProduct = styled.li`
  border: 2px solid var(--color-gray-20);
  border-radius: var(--bd-radius-1);
  width: 100%;
  max-width: 300px;
  flex-shrink: 0;
  transition-duration: 0.2s;

  @media screen and (min-width: 1024px) {
    width: 48%;
  }

  &:hover {
    transform: scale(1.02);
    border-color: var(--color-gray-50);
  }

  .img__container {
    width: 100%;
    background-color: var(--color-gray-0);
    text-align: center;
    height: 150px;
  }

  .img__container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .content__container {
    padding: 26px 21px 23px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .content__container h2 {
    font-size: var(--sz-title-2);
    font-weight: var(--font-weg-700);
  }

  .content__container button {
    width: max-content;
  }

  .content__container span:first-of-type {
    color: var(--color-gray-50);
    font-size: var(--sz-text-3);
  }

  .content__container span:last-of-type {
    color: var(--color-primary);
    font-weight: var(--font-weg-600);
    font-size: var(--sz-text-1);
  }
`;
