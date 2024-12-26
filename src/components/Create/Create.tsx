import React, { useState } from "react";
import { createProduct } from "../../api/api";
import { Cook } from "../../types";
import "./Create.scss";

interface CreateProductProps {
  addProduct: (newProduct: Cook) => void;
}

const CreateProduct = ({ addProduct }: CreateProductProps) => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(100);
  const [desc, setDesc] = useState("");
  const [oldPrice, setOldPrice] = useState(150);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = { title, img, price, desc, oldPrice };

    try {
      const createdProduct = await createProduct(newProduct);
      addProduct(createdProduct);
      setTitle("");
      setImg("");
      setPrice(100);
      setDesc("");
      setOldPrice(150);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="create__product">
      <form onSubmit={handleSubmit}>
        <h1>Create Product</h1>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </label>
        <label>
          Description:
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </label>
        <label>
          Old Price:
          <input
            type="number"
            value={oldPrice}
            onChange={(e) => setOldPrice(Number(e.target.value))}
            required
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
