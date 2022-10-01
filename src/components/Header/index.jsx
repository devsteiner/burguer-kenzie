import { StyledContainerFull } from "../../styles/components/containers";
import { InputSearch } from "./InputSearch";
import { Logo } from "./Logo";
import { StyledHeader } from "./styles";

export const Header = ({ filterProducts }) => {
  return (
    <StyledHeader>
      <StyledContainerFull className="container">
        <Logo />
        <InputSearch filterProducts={filterProducts} />
      </StyledContainerFull>
    </StyledHeader>
  );
};
