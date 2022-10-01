import { toast } from "react-toastify";
import { StyledButton } from "../../../styles/components/button";
import { StyledTotalCart } from "./styles";

export const TotalCart = ({ rmvProductCart, productsCart }) => {
  const total = Number(
    productsCart.reduce((acc, cur) => {
      return acc + cur.price * cur.count;
    }, 0)
  ).toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumIntegerDigits: 2,
  });
  return (
    <StyledTotalCart>
      <div className="total__container">
        <span>Total:</span>
        <span>{total}</span>
      </div>

      <StyledButton
        onClick={() => {
          toast.error("Carrinho vazio");
          rmvProductCart();
        }}
        bgColor="color-gray-20"
        color="color-gray-50"
      >
        Remover todos
      </StyledButton>
    </StyledTotalCart>
  );
};
