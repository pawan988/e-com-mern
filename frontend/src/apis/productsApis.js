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
