import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 8px 10px;
  background-color: var(--color-white);
  border: 2px solid var(--color-gray-20);
  border-radius: var(--bd-radius-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 370px;

  input {
    border: none;
    outline: none;
    min-width: 30px;

    &::placeholder {
      color: var(--color-gray-50);
      font-weight: var(--font-weg-400);
    }
  }

  button {
    font-weight: var(--font-weg-500);
  }
`;
