import { CartMsg } from "./CartMsg";
import { CartProduct } from "./CartProduct";
import { StyledCartContainer, StyledCart, StyledCartList } from "./styles";
import { TotalCart } from "./TotalCart";

export const Cart = ({
  productsCart,
  addProductCart,
  rmvProductCart,
  rmvCountProduct,
}) => {
  return (
    <StyledCartContainer>
      <StyledCart>
        <h2>Carrinho de compras</h2>
        <div className="content__container">
          {productsCart.length ? (
            <StyledCartList>
              {productsCart.map((product) => {
                return (
                  <CartProduct
                    key={product.id}
                    product={product}
                    addProductCart={addProductCart}
                    rmvProductCart={rmvProductCart}
                    rmvCountProduct={rmvCountProduct}
                  />
                );
              })}
            </StyledCartList>
          ) : (
            <CartMsg />
          )}
        </div>
      </StyledCart>
      {productsCart.length ? (
        <TotalCart
          rmvProductCart={() => rmvProductCart([])}
          productsCart={productsCart}
        />
      ) : (
        ""
      )}
    </StyledCartContainer>
  );
};
