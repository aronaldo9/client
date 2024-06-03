import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle as faRegCheckCircle } from "@fortawesome/free-regular-svg-icons"; // Importar del paquete correcto

export function StepThree() {
  return (
    <div className="flex flex-col items-center">
      <FontAwesomeIcon
        icon={faRegCheckCircle}
        className="text-[60px] text-green-500"
      />
      <h2 className="mb-5">¡Compra completada!</h2>

      <Link href="/account">
        <button className="w-72 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
          Ver pedido
        </button>
      </Link>
    </div>
  );
}
