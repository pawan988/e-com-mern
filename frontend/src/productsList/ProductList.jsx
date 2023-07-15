import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getProductActionHandler,
  deleteProductActionHandler,
} from "../redux/actions/product/productAction";
import "./ProductList.css";

const ProductList = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [productData, setProductData] = useState([{}]);
  const getProductsData = useSelector(
    (state) => state && state?.getProductRes && state?.getProductRes?.products
  );
  useEffect(() => {
    dispacth(getProductActionHandler());
  }, []);

  useEffect(() => {
    if (getProductsData) {
      setProductData(getProductsData);
    }
  }, [getProductsData]);
  const handleProductDelete = (id) => {
    dispacth(deleteProductActionHandler(id));
  };
  const handleProductUpdate = (data) => {
    navigate("/update", { state: { data: data } });
  };
  return (
    <>
      <div className="product-list-main-container">
        <div className="product-list-wraper">
          {productData &&
            productData?.length > 0 &&
            productData?.map((items, index) => {
              return (
                <div className="product-container" key={index}>
                  <h6>{items?.name}</h6>
                  <h6>{items?.price}</h6>
                  <h6>{items?.detail}</h6>
                  <div className="delete-product-button">
                    <button onClick={() => handleProductDelete(items?._id)}>
                      Delete
                    </button>
                    <button onClick={() => handleProductUpdate(items)}>
                      Update
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default ProductList;
