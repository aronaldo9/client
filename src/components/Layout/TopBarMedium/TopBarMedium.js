import Link from "next/link";
import { Image } from "semantic-ui-react";
import { Account } from "../Account";
import { MenuMedium } from "../Menu";

export function TopBarMedium(props) {
  const { isOpenSearch } = props;

  return (
    <div className="topBar fixed flex items-center w-full p-5 z-50">
      <div className="w-1/4">
        <Link href="/">
          <Image className="h-10" src="/images/logo.png" alt="Logo Rosant" />
        </Link>
      </div>
      <div className="w-1/2 flex justify-center">
        <MenuMedium isOpenSearch={isOpenSearch} />
      </div>
      <div className="w-1/4 flex justify-end">
        <Account />
      </div>
    </div>
  );
}
