import Link from "next/link";
import { Image } from "semantic-ui-react";
import { Account } from "../Account";
import { Menu } from "../Menu";

export function TopBar(props) {
  const { isOpenSearch } = props;

  return (
    <div className="topBar fixed flex items-center w-full p-5 z-50">
      <div className="w-1/5">
        <Link href="/">
          <Image className="h-10" src="/images/logo.png" alt="Logo Rosant" />
        </Link>
      </div>
      <div className="w-3/5 flex justify-center">
        <Menu isOpenSearch={isOpenSearch} />
      </div>
      <div className="w-1/5 flex justify-end">
        <Account />
      </div>
    </div>
  );
}
