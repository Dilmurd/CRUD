import { useState, useEffect } from "react";
import Product from "./components/Product/Product";
import Create from "./components/Create/Create";
import { fetchProducts } from "./api/api";
import { Cook } from "./types";
import "./App.scss";

const App = () => {
  const [products, setProducts] = useState<Cook[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };
    getProducts();
  }, []);

  const addProduct = (newProduct: Cook) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const editProduct = (updatedProduct: Cook) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const removeProduct = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="app">
      <Create addProduct={addProduct} />
      <Product
        products={products}
        editProduct={editProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default App;
