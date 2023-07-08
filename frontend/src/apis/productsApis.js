import axios from "axios";
const BASE_URL = `http://localhost:8000`;

export const addProductApi = async (productData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `${BASE_URL}/addProduct`,
    productData,
    config
  );

  return response;
};

export const getProductsApi = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.get(`${BASE_URL}/getProducts`, config);
  return response;
};

export const deleteProductApi = async (productId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.delete(`${BASE_URL}/deleteProduct/${productId}`);
  return response;
};
