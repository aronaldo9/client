import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth";

export default function SignUpPage() {
  return (
    <>
      <JoinLayout>
        <div className="w-90">
          <h3 className="mb-4 text-xl font-bold">Registrarse</h3>
          <RegisterForm />

          <div className="mt-20 text-center font-bold">
            <Link href="/join/sign-in">Volver</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
