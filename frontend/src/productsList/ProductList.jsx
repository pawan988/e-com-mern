import React, { useState } from "react";
import "./ProductList.css";

const ProductList = () => {
  const [productData, setProductData] = useState([
    {
      name: "watch",
    },
    {
      name: "watch",
    },
    {
      name: "watch",
    },
    {
      name: "watch",
    },
    {
      name: "watch",
    },
    {
      name: "watch",
    },
  ]);
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
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default ProductList;
