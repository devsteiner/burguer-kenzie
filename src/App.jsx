import { useEffect, useState } from "react";
import {
  StyledContainerFull,
  StyledContainerList,
} from "./styles/components/containers";
import { StyledMain } from "./styles/components/main";
import { Header } from "./components/Header";
import { api } from "./services/api";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart/";
import { InfoSearch } from "./components/InfoSearch";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [filterData, setFilterData] = useState({ isFilter: false, text: "" });

  useEffect(() => {
    api.get(`/products`).then((resp) => setProducts(resp.data));
  }, []);

  const filterProducts = (search) => {
    const normalizedSearch = search.toLowerCase().trim();
    if (normalizedSearch != "") {
      const arrProductsFilteres = products.filter((product) => {
        const { name, category } = product;
        if (
          name.toLowerCase().includes(normalizedSearch) ||
          category.toLowerCase().includes(normalizedSearch)
        ) {
          return product;
        }
      });
      setProductsFiltered(arrProductsFilteres);
      setFilterData({ isFilter: true, text: search });
    } else {
      setProductsFiltered([]);
      setFilterData({ isFilter: false, text: "" });
    }
  };

  const addProductCart = (selectedProduct) => {
    const beProduct = productsCart.find(
      (product) => product.id == selectedProduct.id
    );

    if (beProduct) {
      const newProductsCart = productsCart.map((product) => {
        if (product.id == selectedProduct.id) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      });
      setProductsCart([...newProductsCart]);
    } else {
      selectedProduct = {
        ...selectedProduct,
        count: 1,
      };
      setProductsCart([...productsCart, selectedProduct]);
      toast.success("Produto adicionado ao carrionho");
    }
  };

  const rmvProductCart = (SelectedProduct) => {
    if (!Array.isArray(SelectedProduct)) {
      const newProductsCart = productsCart.filter(
        (product) => product.id != SelectedProduct.id
      );
      setProductsCart(newProductsCart);
      toast.error("Produto removido do carrinho");
    } else {
      setProductsCart([]);
    }
  };

  const rmvCountProduct = (SelectedProduct) => {
    let isLast = false;
    const newProductsCart = productsCart.map((product) => {
      if (product.id == SelectedProduct.id) {
        if (SelectedProduct.count > 1) {
          return {
            ...SelectedProduct,
            count: SelectedProduct.count - 1,
          };
        } else {
          isLast = true;
          rmvProductCart(SelectedProduct);
        }
      } else {
        return product;
      }
    });
    if (!isLast) {
      setProductsCart(newProductsCart);
    }
  };

  const productsForRender = filterData.isFilter ? productsFiltered : products;
  return (
    <>
      <Header filterProducts={filterProducts} />
      <StyledMain>
        <StyledContainerFull className="container products-cart__container">
          <StyledContainerList>
            {filterData.isFilter ? (
              <InfoSearch
                text={filterData.text}
                filterProducts={filterProducts}
              />
            ) : null}
            <ProductsList
              products={productsForRender}
              addProductCart={addProductCart}
            />
          </StyledContainerList>
          <Cart
            productsCart={productsCart}
            addProductCart={addProductCart}
            rmvCountProduct={rmvCountProduct}
            rmvProductCart={rmvProductCart}
          />
        </StyledContainerFull>
      </StyledMain>

      <ToastContainer />
    </>
  );
}

export default App;
