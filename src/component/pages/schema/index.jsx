import * as Yup from "yup";

export const registerSchema = Yup.object({
  username: Yup.string().min(2).max(25).required("please enter your username"),
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(6).required("please enter your password"),
  conform_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "password must match"),
});
