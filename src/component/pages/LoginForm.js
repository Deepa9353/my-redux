import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Register = () => {
  const initialValues = { username: "", password: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventdefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length===0 && isSubmit) {
      console.log(formValues);
    }
  },[formErrors]);
  const validate = (values)=>{
   const error ={};
   const regex=/^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
   if (!values.username){
    error.username="username is reduired";
   }
   if (!values.email){
    error.email="email is reduired";
   }
   if (!values.password){
    error.password="password is reduired";
   }
   return error;
  }
  return (
    <>
      <div className="container justify-content-center">
        <pre>{JSON.stringify(formValues,undefined,2)}</pre>
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="ui form">
            <div className="field mb-3">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
              <br/>
            <div className="field mb-3 ">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <br/>
            <div className="field mb-3">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <br/>  
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
