import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string()
      .required("La contraseña es requerida")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial"
      ),
    repeatPassword: Yup.string()
      .required("Debes confirmar la contraseña")
      .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
  });
}
