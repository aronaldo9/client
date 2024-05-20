import { BasicModal } from "@/components/Shared";
import { useState } from "react";
import { AddressForm } from "../AddressForm";

export function AddAddress(props) {
  const { onReload } = props;
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);

  return (
    <>
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute top-0 right-0"
        onClick={onOpenClose}
      >
        Crear
      </button>

      <BasicModal show={show} onClose={onOpenClose} title="Nueva dirección">
        <AddressForm onClose={onOpenClose} onReload={onReload} />
      </BasicModal>
    </>
  );
}
