import Link from "next/link";
import { Image } from "semantic-ui-react";
import { Account } from "../Account";
import { MenuMedium } from "../Menu";

export function TopBarMedium(props) {
  const { isOpenSearch } = props;

  return (
    <div className="topBar flex items-center justify-between w-full p-5 z-50">
      {/* Menú */}
      <div className="flex items-center">
        {" "}
        {/* Envuelve el menú en un contenedor flex para alinear los elementos */}
        <MenuMedium isOpenSearch={isOpenSearch} />
      </div>
      {/* Logo */}
      <div>
        <Link href="/">
          <Image className="h-10" src="/images/logo.png" alt="Logo Rosant" />
        </Link>
      </div>
      {/* Cuenta */}
      <div>
        <Account />
      </div>
    </div>
  );
}
