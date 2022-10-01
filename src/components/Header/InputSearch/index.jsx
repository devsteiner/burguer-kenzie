import { useState } from "react";
import { StyledButton } from "../../../styles/components/button";
import { StyledForm } from "./styles";

export const InputSearch = ({ filterProducts }) => {
  const [inputSearch, setInputSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    filterProducts(inputSearch);
  };
  return (
    <StyledForm onSubmit={(event) => handleSubmit(event)}>
      <input
        onChange={(event) => setInputSearch(event.target.value)}
        value={inputSearch}
        type="text"
        placeholder="Pesquisar uma delícia"
      />
      <StyledButton>Pesquisar</StyledButton>
    </StyledForm>
  );
};
