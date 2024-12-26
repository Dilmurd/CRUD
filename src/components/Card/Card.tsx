import { useState } from "react";
import { Cook } from "../../types/index";
import "./Card.scss"

interface ProductCardProps {
  product: Cook;
  editProduct: (updatedProduct: Cook) => void;
  removeProduct: (id: string) => void;
}

const Card = ({ product, editProduct, removeProduct }: ProductCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleUpdate = () => {
    editProduct(updatedProduct); 
    setIsEditing(false); 
  };

  const handleDelete = () => {
    removeProduct(product.id);
  };

  return (
    <div className="product-card">
      <img src={product.img} alt={product.title} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedProduct.title}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, title: e.target.value })
            }
          />
          <textarea
            value={updatedProduct.desc}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, desc: e.target.value })
            }
          />
          <input
            type="number"
            value={updatedProduct.price}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, price: +e.target.value })
            }
          />
          <input
            type="number"
            value={updatedProduct.oldPrice}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, oldPrice: +e.target.value })
            }
          />
        </>
      ) : (
        <>
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <p>Price: {product.price} so'm</p>
          <p>Old Price: {product.oldPrice} so'm</p>
        </>
      )}

      <button onClick={isEditing ? handleUpdate : () => setIsEditing(true)}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Card;
