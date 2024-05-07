import Link from "next/link";
import { Image, Icon } from "semantic-ui-react";
import { Account } from "../Account";
import { useState } from "react";
import { MenuSmall } from "../Menu"; // Importamos el componente Menu

export function TopBarSmall(props) {
  const [isSearchActive, setSearchActive] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura del menú

  // Función para abrir el menú
  const openMenu = () => {
    setMenuOpen(true);
    setSearchActive(false); // Cerrar la búsqueda al abrir el menú
  };

  return (
    <div className="bg-white p-4">
      {/* Primera fila */}
      <div className="flex items-center justify-between mb-4">
        {/* Menu hamburguesa */}
        <div
          className="hover:text-red-700 cursor-pointer"
          onClick={() => setMenuOpen(!isMenuOpen)} // Alternar el estado del menú al hacer clic
        >
          {isMenuOpen ? (
            // Mostrar el icono de cierre si el menú está abierto
            <Icon name="close" size="large" className="text-black" />
          ) : (
            // Mostrar el icono de menú si el menú está cerrado
            <Icon name="bars" size="large" className="text-black" />
          )}
        </div>

        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo Rosant" className="h-8" />
        </Link>

        {/* Account */}
        <Account />
      </div>

      {/* Agregamos el componente Menu y pasamos el estado de la búsqueda */}
      {isMenuOpen && (
        <MenuSmall
          isOpenSearch={isSearchActive}
          closeMenu={() => setMenuOpen(false)}
        />
      )}

      {/* Segunda fila para el botón de búsqueda */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Buscar"
          className={`bg-gray-100 text-gray-800 px-3 py-1 rounded-l-md focus:outline-none w-80 ${
            isSearchActive ? "bg-red-600 text-white" : ""
          }`}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
        />
        <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded-r-md">
          <Icon name="search" />
        </button>
      </div>
    </div>
  );
}
