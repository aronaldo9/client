import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeEmailForm.form";
import { User } from "@/api";
import { useAuth } from "@/hooks";

const userCtrl = new User();

export function ChangeEmailForm() {
  const { user, updateUser } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, { email: formValue.email });
        updateUser("email", formValue.email);
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
      <label className="block text-black mb-2">
        Cambiar correo electrónico
      </label>

      <div className="flex flex-col md:flex-row">
        <input
          type="email"
          name="email"
          placeholder="Nuevo correo electrónico"
          className="focus:ring-red-500 focus:border-red-500 block w-full md:w-full px-4 py-2 border-gray-300 rounded-md shadow-sm text-sm mb-4 md:mb-0 mr-0 md:mr-4"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
        <input
          type="email"
          name="repeatEmail"
          placeholder="Repetir correo electrónico"
          className="focus:ring-red-500 focus:border-red-500 block w-full md:w-full px-4 py-2 border-gray-300 rounded-md shadow-sm text-sm mb-4 md:mb-0 mr-0 md:mr-4"
          value={formik.values.repeatEmail}
          onChange={formik.handleChange}
        />
        {formik.errors.repeatEmail && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.repeatEmail}
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
