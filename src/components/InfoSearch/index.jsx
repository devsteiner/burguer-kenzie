import { StyledButton } from "../../styles/components/button";
import { StyledInfoSearch } from "./styles";

export const InfoSearch = ({ text, filterProducts }) => {
  return (
    <StyledInfoSearch>
      <h2>
        Resultados para: <span>{text}</span>
      </h2>
      <StyledButton onClick={() => filterProducts("")}>
        Limpar busca
      </StyledButton>
    </StyledInfoSearch>
  );
};
