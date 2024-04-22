import { LoginForm } from "@/components/Auth";
import { JoinLayout } from "@/layouts";
import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      <JoinLayout>
        <div>
          <h3 className="mb-4 text-xl font-bold">Iniciar Sesión</h3>

          <LoginForm />

          <div>
            <div className="mt-20 text-center font-bold">
              <Link href="/join/sign-up">
                ¡No tienes una cuenta? ¡Regístrate!
              </Link>
            </div>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
