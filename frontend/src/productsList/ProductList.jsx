import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductActionHandler } from "../redux/actions/product/productAction";
import "./ProductList.css";

const ProductList = () => {
  const dispacth = useDispatch();
  const [productData, setProductData] = useState([]);
  const getProductsData = useSelector(
    (state) => state && state?.productRes && state?.productRes?.products
  );
  useEffect(() => {
    dispacth(getProductActionHandler());
  }, []);

  useEffect(() => {
    if (getProductsData) {
      setProductData(getProductsData);
    }
  }, [getProductsData]);

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
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default ProductList;
