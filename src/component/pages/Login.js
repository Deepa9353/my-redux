import React from "react";
import { FaUserAlt, FaEnvelope, FaKey } from "react-icons/fa";
import { useFormik } from "formik";
import { registerSchema } from "./schema";

const initialValues = {
  
  email: "",
  password: "",
  
};
const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values,action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    <>
      <div className="account-page">
        <div className="form-container">
          <div className="form-btn">
            <span>Login Us</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span>
                <FaEnvelope />
              </span>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
            <div className="input-box">
              <span>
                <FaKey />
              </span>
              <input
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
            <button type="submit" className="register-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
