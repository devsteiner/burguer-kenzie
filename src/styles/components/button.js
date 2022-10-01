import styled from "styled-components";

export const StyledButtonBasic = styled.button`
  padding: 10px;
  background-color: transparent;
  border-radius: var(--bd-radius-1);
  border: none;
  outline: none;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    filter: brightness(0.95);
  }
`;

export const StyledButton = styled(StyledButtonBasic)`
  font-size: var(--${({ size }) => size});
  font-weight: 600;
  color: var(--${({ color }) => (color ? color : "color-white")});
  background-color: var(
    --${({ bgColor }) => (bgColor ? bgColor : "color-primary")}
  );
  padding: 11.5px 20px;
`;
