import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Auth } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./LoginForm.form";

const authCtrl = new Auth();

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await authCtrl.login(formValue);
        login(response.jwt);
      } catch (error) {
        console.error(error);
        formik.setFieldError(
          "password",
          error.message ||
            "El correo electrónico o la contraseña son incorrectos"
        );
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
      <div className="relative z-0 w-full mb-5 group">
        <input
          name="identifier"
          type="text"
          id="email"
          className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
            formik.touched.identifier && formik.errors.identifier
              ? "border-red-500"
              : "border-gray-300"
          } appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 ${
            formik.touched.identifier && formik.errors.identifier
              ? "focus:border-red-600"
              : "focus:border-red-600"
          } peer`}
          placeholder=" "
          value={formik.values.identifier}
          onChange={formik.handleChange}
          required
        />
        <label
          htmlFor="email"
          className={`peer-focus:font-medium absolute text-sm ${
            formik.touched.identifier && formik.errors.identifier
              ? "text-red-500"
              : "text-gray-500"
          } dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
        >
          Correo electrónico o nombre de usuario
        </label>
        {formik.touched.identifier && formik.errors.identifier ? (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.identifier}
          </div>
        ) : null}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="password"
          id="password"
          className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
            formik.touched.password && formik.errors.password
              ? "border-red-500"
              : "border-gray-300"
          } appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 ${
            formik.touched.password && formik.errors.password
              ? "focus:border-red-600"
              : "focus:border-red-600"
          } peer`}
          placeholder=" "
          value={formik.values.password}
          onChange={formik.handleChange}
          required
        />
        <label
          htmlFor="password"
          className={`peer-focus:font-medium absolute text-sm ${
            formik.touched.password && formik.errors.password
              ? "text-red-500"
              : "text-gray-500"
          } dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
        >
          Contraseña
        </label>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "Iniciando sesión..." : "Iniciar Sesión"}
      </button>
    </form>
  );
}
