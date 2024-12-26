import Card from "../Card/Card";
import { Cook } from "../../types";
import "./Product.scss"

interface ProductListProps {
  products: Cook[];
  editProduct: (updatedProduct: Cook) => void;
  removeProduct: (id: string) => void;
}

const ProductList = ({ products, editProduct, removeProduct }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          editProduct={editProduct}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
