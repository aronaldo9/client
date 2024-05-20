import Link from "next/link";
import { Image } from "semantic-ui-react";
import { Account } from "../Account";
import { MenuLarge } from "../Menu";

export function TopBarLarge(props) {
  const { isOpenSearch } = props;

  return (
    <div className="topBar fixed flex items-center w-full p-5 z-50">
      <div className="w-1/5">
        <Link href="/">
          <Image className="h-10" src="/images/logo.png" alt="Logo Rosant" />
        </Link>
      </div>
      <div className="w-3/5 flex justify-center backdrop-blur">
        <MenuLarge isOpenSearch={isOpenSearch} />
      </div>
      <div className="w-1/5 flex justify-end">
        <Account />
      </div>
    </div>
  );
}
