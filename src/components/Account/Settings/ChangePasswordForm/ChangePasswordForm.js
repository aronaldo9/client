import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangePasswordForm.form";
import { User } from "@/api";
import { useAuth } from "@/hooks";

const userCtrl = new User();

export function ChangePasswordForm() {
  const { user, logout } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, { password: formValue.password });
        logout();
        formik.resetForm();
      } catch (error) {
        throw error;
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto md:max-w-full mt-5"
    >
      <label className="block text-black mb-2">Cambiar contraseña</label>

      <div className="flex flex-col md:flex-row">
        <input
          type="password"
          name="password"
          placeholder="Nueva contraseña"
          className="focus:ring-red-500 focus:border-red-500 block w-full md:w-full px-4 py-2 border-gray-300 rounded-md shadow-sm text-sm mb-4 md:mb-0 mr-0 md:mr-4"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
        )}
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="focus:ring-red-500 focus:border-red-500 block w-full md:w-full px-4 py-2 border-gray-300 rounded-md shadow-sm text-sm mb-4 md:mb-0 mr-0 md:mr-4"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.repeatPassword && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.repeatPassword}
          </p>
        )}
        <button
          type="submit"
          className="inline-block w-full md:w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          disabled={formik.isSubmitting} // Deshabilitar el botón mientras se está enviando el formulario
        >
          {formik.isSubmitting ? "Enviando..." : "Enviar"}{" "}
          {/* Cambiar el texto del botón según el estado de carga */}
        </button>
      </div>
    </form>
  );
}
