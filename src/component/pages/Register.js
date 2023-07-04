import React from "react";
import { FaUserAlt, FaEnvelope, FaKey } from "react-icons/fa";
import { useFormik } from "formik";
import { registerSchema } from "./schema";

const initialValues = {
  username: "",
  email: "",
  password: "",
  conform_passwod: "",
};
const Register = () => {
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
            <span>Register</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span>
                <FaUserAlt />
              </span>
              <input
                type="text"
                name="username"
                autoComplete="off"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <p className="form-error">{errors.username}</p>
              ) : null}
            </div>
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
            <div className="input-box">
              <span>
                <FaKey />
              </span>
              <input
                type=" password"
                name="conform_passwod"
                autoComplete="off"
                placeholder="conform Password"
                value={values.conform_passwod}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.conform_passwod && touched.conform_passwod ? (
                <p className="form-error">{errors.conform_passwod}</p>
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

export default Register;
