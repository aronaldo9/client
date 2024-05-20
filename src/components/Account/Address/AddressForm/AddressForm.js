import { useFormik } from "formik";
import { initialValues, validationSchema } from "./AddressForm.form";
import { Address } from "@/api";
import { useAuth } from "@/hooks";

const addressCtrl = new Address();

export function AddressForm(props) {
  const { onClose, onReload, addressId, address } = props;
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(address),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (addressId) {
          await addressCtrl.update(formValue, addressId);
        } else {
          await addressCtrl.create(formValue, user.id);
        }

        formik.resetForm();
        onReload();
        onClose();
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
      <input
        type="text"
        name="title"
        placeholder="Título de la dirección"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
        value={formik.values.title}
        onChange={formik.handleChange}
        aria-invalid={formik.errors.title ? "true" : "false"}
      />
      {formik.errors.title && (
        <p className="text-red-500 text-sm">{formik.errors.title}</p>
      )}

      <div className="flex flex-col space-y-4 mb-4 md:flex-row md:space-x-4 md:space-y-0">
        <input
          type="text"
          name="username"
          placeholder="Nombre y apellidos"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          value={formik.values.username}
          onChange={formik.handleChange}
          aria-invalid={formik.errors.username ? "true" : "false"}
        />
        {formik.errors.username && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          value={formik.values.address}
          onChange={formik.handleChange}
          aria-invalid={formik.errors.address ? "true" : "false"}
        />
        {formik.errors.address && (
          <p className="text-red-500 text-sm">{formik.errors.address}</p>
        )}
      </div>

      <div className="flex flex-col space-y-4 mb-4 md:flex-row md:space-x-4 md:space-y-0">
        <input
          type="text"
          name="state"
          placeholder="Provincia"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          value={formik.values.state}
          onChange={formik.handleChange}
          aria-invalid={formik.errors.state ? "true" : "false"}
        />
        {formik.errors.state && (
          <p className="text-red-500 text-sm">{formik.errors.state}</p>
        )}
        <input
          type="text"
          name="city"
          placeholder="Ciudad"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          value={formik.values.city}
          onChange={formik.handleChange}
          aria-invalid={formik.errors.city ? "true" : "false"}
        />
        {formik.errors.city && (
          <p className="text-red-500 text-sm">{formik.errors.city}</p>
        )}
      </div>

      <div className="flex flex-col space-y-4 mb-4 md:flex-row md:space-x-4 md:space-y-0">
        <input
          type="text"
          name="postal_code"
          placeholder="Código Postal"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          value={formik.values.postal_code}
          onChange={formik.handleChange}
          aria-invalid={formik.errors.postal_code ? "true" : "false"}
        />
        {formik.errors.postal_code && (
          <p className="text-red-500 text-sm">{formik.errors.postal_code}</p>
        )}
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          value={formik.values.phone}
          onChange={formik.handleChange}
          aria-invalid={formik.errors.phone ? "true" : "false"}
        />
        {formik.errors.phone && (
          <p className="text-red-500 text-sm">{formik.errors.phone}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-block w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 md:w-full"
        loading={formik.isSubmitting}
      >
        Guardar dirección
      </button>
    </form>
  );
}
