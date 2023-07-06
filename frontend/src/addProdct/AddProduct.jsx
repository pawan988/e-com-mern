import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import { addProductActionHandler } from "../redux/actions/product/productAction";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
const AddProduct = () => {
  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state);

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Product name is required"),
    productPrice: Yup.string().required("Product Price is required"),
    productCategory: Yup.string().required("Product category is required"),
  });
  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productCategory: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const addProductPayload = {
        name: values?.productName,
        price: values?.productPrice,
        detail: values?.productCategory,
      };
      dispatch(addProductActionHandler(addProductPayload));
      resetForm();
    },
  });

  return (
    <>
      <div className="add-product-main-container">
        <div className="add-product-heading">
          <h1>Add your product here</h1>
        </div>
        <div className="add-product-form-container">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="product name">Product name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.productName}
              />
              {formik.touched.productName && formik.errors.productName ? (
                <div>{formik.errors.productName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="Productprice">Product price</label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.productPrice}
              />
              {formik.touched.productPrice && formik.errors.productPrice ? (
                <div>{formik.errors.productPrice}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="Product category">Product category</label>
              <input
                type="number"
                id="productCategory"
                name="productCategory"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.productCategory}
              />
              {formik.touched.productCategory &&
              formik.errors.productCategory ? (
                <div>{formik.errors.productCategory}</div>
              ) : null}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
