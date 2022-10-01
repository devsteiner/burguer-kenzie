import { Product } from "./Product";
import { StyledProductList } from "./styles";

export const ProductsList = ({ products, addProductCart }) => {
  return (
    <StyledProductList>
      {products.length
        ? products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                addProductCart={addProductCart}
              />
            );
          })
        : null}
    </StyledProductList>
  );
};
