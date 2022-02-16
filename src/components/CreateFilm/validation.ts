import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  year: Yup.string()
    .required("Year is required")
    .min(4, "Year length should be at least 3 characters")
    .max(4, "Year length should be less then 4 characters"),
});
