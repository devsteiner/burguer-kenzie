import styled from "styled-components";

export const StyledCartMsg = styled.section`
  height: 158px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  p {
    font-size: var(--sz-text-1);
    font-weight: var(--font-weg-700);
  }

  span {
    font-size: var(--sz-text-2);
    color: var(--color-gray-50);
    font-weight: var(--font-weg-400);
  }
`;
