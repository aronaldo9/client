import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    username: "",
    firstname: "",
    lastname: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
    username: Yup.string().required(true),
    firstname: Yup.string().required(true),
    lastname: Yup.string().required(true),
  });
}
