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
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
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
      <div className="flex flex-col flex-1 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-center h-screen">
            {children}
          </div>
        </div>
        <div
          className="hidden md:block w-1/2 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/imgRegister.png')" }}
        ></div>
      </div>
    </div>
  );
}
