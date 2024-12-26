import axios from "axios";

const apiUrl = "https://676d57bd0e299dd2ddff3c52.mockapi.io/Product"; 


export const fetchProducts = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

// Create a new product
export const createProduct = async (product: any) => {
  const response = await axios.post(apiUrl, product);
  return response.data;
};

// Update product by ID
export const updateProduct = async (id: string, product: any) => {
  const response = await axios.put(`${apiUrl}/${id}`, product);
  return response.data;
};

// Delete product by ID
export const deleteProduct = async (id: string) => {
  await axios.delete(`${apiUrl}/${id}`);
};
