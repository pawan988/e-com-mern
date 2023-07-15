import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateProductActionHandler } from "../redux/actions/product/productAction";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location.state?.data;
  const [productData, setProductData] = useState({});

  useEffect(() => {
    if (data) {
      setProductData(data);
    }
  }, [data]);

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Product name is required"),
    productPrice: Yup.string().required("Product Price is required"),
    productCategory: Yup.string().required("Product category is required"),
  });

  const formik = useFormik({
    initialValues: {
      productName: productData?.name || "",
      productPrice: productData?.price || "",
      productCategory: productData?.detail || "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      const updateProductPayload = {
        name: values?.productName,
        price: values?.productPrice,
        detail: values?.productCategory,
        id: productData?._id,
      };
      dispatch(updateProductActionHandler(updateProductPayload));
      resetForm();
    },
  });

  return (
    <div className="update-product-main-container add-product-main-container">
      <div className="add-product-heading">
        <h1>Update product here</h1>
      </div>
      <div className="update-product-form add-product-form-container">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="productName">Product name</label>
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
            <label htmlFor="productPrice">Product price</label>
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
            <label htmlFor="productCategory">Product category</label>
            <input
              type="text"
              id="productCategory"
              name="productCategory"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productCategory}
            />
            {formik.touched.productCategory && formik.errors.productCategory ? (
              <div>{formik.errors.productCategory}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
