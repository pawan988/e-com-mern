import axios from "axios";
import { get_token } from "../utils/utils";

const BASE_URL = `http://localhost:8000`;
export const addProductApi = async (productData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `${BASE_URL}/addProduct`,
    config,
    productData
  );

  return response;
};

export const getProductsApi = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: get_token(),
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

export const updateProductApi = async (productData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.put(
    `${BASE_URL}/updateProduct/${productData?.id}`,
    productData,
    config
  );

  return response;
};
