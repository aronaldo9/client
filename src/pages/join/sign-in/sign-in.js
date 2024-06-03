import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { LoginForm } from "@/components/Auth";
import { Seo } from "@/components/Shared";

export default function SignInPage() {
  return (
    <>
      <Seo title="Iniciar Sesión" />
      <JoinLayout>
        <div className="w-full md:w-80 px-4">
          <h3 className="mb-4 text-xl font-bold">Iniciar Sesión</h3>

          <LoginForm />

          <div className="mt-8 text-center font-bold">
            <Link href="/join/sign-up">
              ¿No tienes una cuenta? ¡Regístrate!
            </Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
