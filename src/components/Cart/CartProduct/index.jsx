import { StyledCartProduct } from "./styles";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
import { StyledButtonBasic } from "../../../styles/components/button";

export const CartProduct = ({
  product,
  addProductCart,
  rmvProductCart,
  rmvCountProduct,
}) => {
  const { img, name, category, count } = product;

  return (
    <StyledCartProduct>
      <div className="content-product__container">
        <div className="content__img">
          <img src={img} alt={name} />
        </div>
        <div className="count-info-count__container">
          <div className="content__info">
            <h3>{name}</h3>
            <span>{category}</span>
          </div>
          <div className="content__count">
            <button onClick={() => addProductCart(product)}>
              <GrAddCircle />
            </button>{" "}
            <span>{count}</span>{" "}
            <button onClick={() => rmvCountProduct(product)}>
              <GrSubtractCircle />
            </button>
          </div>
        </div>
      </div>

      <StyledButtonBasic
        className="button__rmv"
        onClick={() => rmvProductCart(product)}
      >
        Remover
      </StyledButtonBasic>
    </StyledCartProduct>
  );
};
