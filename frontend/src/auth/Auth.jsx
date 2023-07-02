import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import {
  signupUserActionHandler,
  loginUserActionHandler,
} from "../redux/authAction";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRegiser, setIsReister] = useState(true);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    const user = localStorage?.getItem("user");
    if (user) {
      navigate("/");
    }
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string().required("Confirm Password is required"),
    phone: Yup.string().required("Phone is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const userSignupPayload = {
        name: values?.name,
        email: values?.email,
        password: values?.password,
        confirm_password: values?.confirm_password,
        phone: values?.phone,
      };
      dispatch(signupUserActionHandler(userSignupPayload, setIsReister));
      resetForm();
    },
  });

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("values ===>>>", values);
      const userLoginPayload = {
        email: values?.email,
        password: values?.password,
      };
      dispatch(loginUserActionHandler(userLoginPayload));
      resetForm();
    },
  });
  return (
    <>
      {isRegiser ? (
        <div className="signup-main-cont">
          <div className="signup-form-cont">
            <div className="signup-title">
              <h4>Login</h4>
              <div className="signup-form">
                <form onSubmit={loginFormik.handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={loginFormik.handleChange}
                      onBlur={loginFormik.handleBlur}
                      value={loginFormik.values.email}
                    />
                    {loginFormik.touched.email && loginFormik.errors.email ? (
                      <div>{loginFormik.errors.email}</div>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={loginFormik.handleChange}
                      onBlur={loginFormik.handleBlur}
                      value={loginFormik.values.password}
                    />
                    {loginFormik.touched.password &&
                    loginFormik.errors.password ? (
                      <div>{loginFormik.errors.password}</div>
                    ) : null}
                  </div>

                  <button type="submit">Login</button>
                </form>
                <div className="login-link">
                  <p onClick={() => setIsReister(false)}>
                    New User? Register Here{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="signup-main-cont">
          <div className="signup-form-cont">
            <div className="signup-title">
              <h4>Sign Up</h4>
              <div className="signup-form">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div>{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div>{formik.errors.phone}</div>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div>{formik.errors.password}</div>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="confirm passowrd">Confirm Password</label>
                    <input
                      type="password"
                      id="confirm_password"
                      name="confirm_password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirm_password}
                    />
                    {formik.touched.confirm_password &&
                    formik.errors.confirm_password ? (
                      <div>{formik.errors.confirm_password}</div>
                    ) : null}
                  </div>

                  <button type="submit">Submit</button>
                </form>
                <div className="login-link">
                  <p onClick={() => setIsReister(true)}>
                    Have an account ? Login Here{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
