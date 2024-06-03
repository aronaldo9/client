import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { map } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";

export function HeaderCart() {
  const {
    query: { step = 1 },
  } = useRouter();
  const currentStep = Number(step);

  const steps = [
    {
      number: 1,
      title: "Cesta",
    },
    {
      number: 2,
      title: "Pago",
    },
    {
      number: 3,
      title: "Confirmación",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full p-4 z-50 bg-white flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full flex justify-between items-center lg:w-1/5">
        <Link href="/">
          <img src="/images/logo.png" alt="Rosant" width={150} height={30} />
        </Link>
        <div className="lg:hidden flex items-center">
          <FontAwesomeIcon
            icon={faLock}
            className="text-green-400 text-xl mr-2"
          />
          <div className="flex flex-col border-l border-black pl-2">
            <span className="font-bold text-sm">Pago seguro</span>
            <span className="text-gray-400 text-xs mt-1">
              256-bit SSL Secure
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/5 flex flex-col lg:flex-row items-center justify-center my-2 lg:my-0">
        <div className="flex flex-row items-center justify-center w-full">
          {map(steps, (step, index) => (
            <div
              key={step.number}
              className={classNames("flex items-center", {
                "text-red-500": step.number === currentStep,
                "text-white": step.number < currentStep,
              })}
            >
              <div
                className={classNames(
                  "relative flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 border-4 rounded-full text-sm font-bold mr-2 lg:mr-4",
                  {
                    "border-red-500": step.number === currentStep,
                    "bg-red-500 border-red-500": step.number < currentStep,
                    "border-black": step.number > currentStep,
                  }
                )}
              >
                {step.number < currentStep ? (
                  <FontAwesomeIcon icon={faCheck} className="text-white" />
                ) : (
                  step.number
                )}
              </div>
              <span className="text-black text-sm lg:text-base">
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <span
                  className={classNames("w-12 lg:w-24 h-1 mx-2 lg:mx-4", {
                    "bg-red-500": step.number < currentStep,
                    "bg-black": step.number >= currentStep,
                  })}
                ></span>
              )}
              {index === steps.length - 1 && (
                <span className="hidden lg:block w-12 lg:w-24 h-1 bg-black mx-2 lg:mx-4"></span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex w-1/5 justify-end items-center">
        <FontAwesomeIcon
          icon={faLock}
          className="text-green-400 text-xl mr-2"
        />
        <div className="flex flex-col border-l border-black pl-2">
          <span className="font-bold text-sm">Pago seguro</span>
          <span className="text-gray-400 text-xs mt-1">256-bit SSL Secure</span>
        </div>
      </div>
    </div>
  );
}
