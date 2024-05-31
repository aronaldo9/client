import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { forEach } from "lodash";
import { fn } from "@/utils";
import Link from "next/link";

export function Resume(props) {
  const { products } = props;
  const router = useRouter();
  const [totals, setTotals] = useState(null);

  useEffect(() => {
    let totals = {
      original: 0,
      discount: 0,
      price: 0,
    };

    forEach(products, (product) => {
      const price = fn.calcDiscount(
        product.attributes.price,
        product.attributes.discount
      );

      totals = {
        original: totals.original + product.attributes.price * product.quantity,
        discount:
          totals.discount +
          (product.attributes.price - price) * product.quantity,
        price: totals.price + price * product.quantity,
      };
    });

    setTotals(totals);
  }, [products]);

  const goToStepTwo = () => {
    router.replace({ query: { ...router.query, step: 2 } });
  };

  if (!totals) return null;

  return (
    <div className="resume">
      <h2 className="mb-4 text-lg">Resumen</h2>

      <div className="bg-gray-200 w-full rounded-2xl p-5 flex flex-col items-center">
        <div className="price w-full mb-5 flex flex-col">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Precio Oficial</span>
            <span className="text-sm text-gray-500">
              {totals.original.toFixed(2)}€
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Descuento</span>
            <span className="text-sm text-gray-500">
              {totals.discount.toFixed(2)}€
            </span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-base">Subtotal</span>
            <span className="text-base">{totals.price.toFixed(2)}€</span>
          </div>
        </div>
        <button
          className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={goToStepTwo}
        >
          Proceder con el pago
        </button>
        <Link href="/" className="mt-5 text-black text-xs hover:text-red-600">
          Continuar comprando
        </Link>
      </div>
    </div>
  );
}
