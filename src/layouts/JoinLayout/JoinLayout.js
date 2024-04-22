import { useAuth } from "@/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon, Image } from "semantic-ui-react";

export function JoinLayout(props) {
  const { children } = props;
  const router = useRouter();
  const { user } = useAuth();

  if (user) {
    router.push("/");
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between items-center p-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Rosant"
            className="h-12 cursor-pointer"
          />
        </Link>
        <Link href="/">
          <Icon name="close" className="text-xl text-red-500 cursor-pointer" />
        </Link>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2">
          <div className="h-screen flex items-center justify-center">
            {children}
          </div>
        </div>
        <div
          className="w-1/2 h-full bg-center bg-cover"
          style={{ backgroundImage: "url('/images/imgRegister.png')" }}
        ></div>
      </div>
    </div>
  );
}
