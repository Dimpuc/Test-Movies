import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required"),
  name: Yup.string().min(3, "Name length should be at least 4 characters"),

  password: Yup.string()
    .matches(/^\S*$/, "Whitespace is not allowed")
    .required("Password is required")
    .min(4, "Password length should be at least 4 characters")
    .max(10, "Password length should be less then 10 characters")
    .equals([Yup.ref("password")], "Passwords do not match"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    // .oneOf([Yup.ref("password")], "Passwords must and should match")
    .equals([Yup.ref("password")], "Passwords do not match"),
});
