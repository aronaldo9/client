import Link from "next/link";
import { Button, Image } from "semantic-ui-react";

export function Footer() {
  return (
    <div className="bg-black py-8 w-full">
      <div className="mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0 text-center sm:text-center mx-auto">
            <Link href="/" className="text-center">
              <Image
                src="/images/logo.png"
                alt="logo Rosant"
                size="small"
                className="mx-auto"
              />
            </Link>
          </div>

          <div className="w-full sm:w-1/3 mb-4 sm:mb-0 text-center sm:text-center">
            <ul className="flex flex-col gap-2 text-white">
              <li>
                <Link href="#">Términos y condiciones</Link>
              </li>
              <li>
                <Link href="#">Política de privacidad</Link>
              </li>
              <li>
                <Link href="#">Contacto</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end items-start">
            <Button
              as="a"
              href="#"
              circular
              color="facebook"
              icon="facebook"
              className="mr-2"
            />
            <Button
              as="a"
              href="#"
              circular
              color="instagram"
              icon="instagram"
              className="mr-2"
            />
            <Button
              as="a"
              href="#"
              circular
              color="youtube"
              icon="youtube"
              className="mr-2"
            />
            <Button
              as="a"
              href="#"
              circular
              color="red"
              icon="mail"
              className="mr-2"
            />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white text-center">
          <span className="text-white">
            Copyright © 2024 Rosant - Todos los derechos reservados
          </span>
        </div>
      </div>
    </div>
  );
}
