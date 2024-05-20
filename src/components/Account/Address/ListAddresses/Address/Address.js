import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Address as AddressCtrl } from "@/api";
import { BasicModal, Confirm } from "@/components/Shared";
import { AddressForm } from "../../AddressForm";
import { useState } from "react";

const addressCtrl = new AddressCtrl();

export function Address(props) {
  const { addressId, address, onReload } = props;
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const openCloseEdit = () => setShowEdit((prevState) => !prevState);
  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState);

  const onDelete = async () => {
    try {
      await addressCtrl.delete(addressId);
      onReload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-gray-100 p-5 mb-5 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="md:flex md:items-center">
          <p className="font-bold text-lg mb-2 md:mb-0 md:mr-2">
            {address.title}:{" "}
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            {address.username}, {address.address}, {address.state},{" "}
            {address.city}, {address.postal_code}
          </p>
        </div>

        <div className="flex mt-4 md:mt-0">
          <button
            className="bg-red-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-red-700"
            onClick={openCloseEdit}
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button
            className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
            onClick={openCloseConfirm}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>

      <Confirm
        open={showConfirm}
        onCancel={openCloseConfirm}
        onConfirm={onDelete}
        content="¿Estás seguro de querer eliminar esta dirección?"
      />

      <BasicModal
        show={showEdit}
        onClose={openCloseEdit}
        title="Editar dirección"
      >
        <AddressForm
          onClose={openCloseEdit}
          onReload={onReload}
          addressId={addressId}
          address={address}
        />
      </BasicModal>
    </>
  );
}
