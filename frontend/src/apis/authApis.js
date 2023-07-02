import axios from "axios";
const BASE_URL = `http://localhost:8000`;

export const userSignupApi = async (signupData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(`${BASE_URL}/register`, signupData, config);

  return response;
};

export const userLoginApi = async (loginData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(`${BASE_URL}/login`, loginData, config);

  return response;
};
