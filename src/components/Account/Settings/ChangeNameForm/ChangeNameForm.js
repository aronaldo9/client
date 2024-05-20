import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeNameForm.form";
import { useAuth } from "@/hooks";
import { User } from "@/api";

const userCtrl = new User();

export function ChangeNameForm() {
  const { user } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(user.firstname, user.lastname),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, formValue);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form
      className="max-w-md mx-auto md:max-w-full"
      onSubmit={formik.handleSubmit}
    >
      <label className="block text-black mb-2">Nombre y apellidos</label>

      <div className="flex flex-col md:flex-row">
        <input
          type="text"
          name="firstname"
          placeholder="Nombre"
          className="focus:ring-red-500 focus:border-red-500 block w-full md:w-full px-4 py-2 border-gray-300 rounded-md shadow-sm text-sm mb-4 md:mb-0 mr-0 md:mr-4"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.errors.firstname}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Apellidos"
          className="focus:ring-red-500 focus:border-red-500 block w-full md:w-full px-4 py-2 border-gray-300 rounded-md shadow-sm text-sm mb-4 md:mb-0 mr-0 md:mr-4"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.errors.lastname}
        />

        <button
          type="submit"
          className="inline-block w-full md:w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          loading={formik.isSubmitting}
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
