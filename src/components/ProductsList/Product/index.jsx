import { StyledButton } from "../../../styles/components/button";
import { StyledProduct } from "./styles";

export const Product = ({ product, addProductCart }) => {
  const { img, name, category, price } = product;
  const valueFormat = Number(price).toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumIntegerDigits: 2,
  });

  return (
    <StyledProduct>
      <div className="img__container">
        <img src={img} alt={name} />
      </div>
      <div className="content__container">
        <h2>{name}</h2>
        <span>{category}</span>
        <span>{valueFormat}</span>
        <StyledButton onClick={() => addProductCart(product)}>
          Adicionar
        </StyledButton>
      </div>
    </StyledProduct>
  );
};
