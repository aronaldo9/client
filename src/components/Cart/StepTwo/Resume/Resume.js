import { useEffect, useState } from "react";
import { forEach, map } from "lodash";
import { fn } from "@/utils";
import { Button } from "semantic-ui-react";
import { Cart } from "@/api";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useAuth, useCart } from "@/hooks";
import { useRouter } from "next/router";

const cartCtrl = new Cart();

export function Resume(props) {
  const { products, addressSelected } = props;
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const { deleteAllItems } = useCart();
  const router = useRouter();

  useEffect(() => {
    let totalTemp = 0;

    forEach(products, (product) => {
      const price = fn.calcDiscount(
        product.attributes.price,
        product.attributes.discount
      );
      totalTemp += price * product.quantity;
    });

    setTotal(totalTemp.toFixed(2));
  }, [products]);

  const onPay = async () => {
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);

    if (result.error) {
      console.error(result.error.message);
    } else {
      const response = await cartCtrl.paymentCart(
        result.token,
        products,
        user.id,
        addressSelected
      );

      if (response.status === 200) {
        setLoading(false);
        deleteAllItems();
        goToStepEnd();
      } else {
        console.error("Error al realizar el pedido");
      }
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const goToStepEnd = () => {
    router.replace({ query: { ...router.query, step: 3 } });
  };

  if (!total) return null;

  return (
    <div className="resume w-full">
      <h2 className="mb-4 text-lg">Resumen</h2>

      <div className="bg-gray-200 w-full rounded-lg p-5 flex flex-col items-center mb-6">
        <div className="w-full flex flex-col">
          {map(products, (product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b border-gray-400 py-2 last:border-0 last:pb-0"
            >
              <div className="flex flex-col justify-center">
                <p className="font-bold mb-1">{product.attributes.name}</p>
                <span className="text-sm text-gray-500">
                  {product.attributes.category.data.attributes.title}
                </span>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {product.quantity > 0 && `${product.quantity}x`}{" "}
                {fn.calcDiscount(
                  product.attributes.price,
                  product.attributes.discount
                )}
                €
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-200 w-full rounded-lg p-5 flex flex-col items-center">
        <div className="w-full flex justify-between mb-8">
          <span className="font-bold">Total</span>
          <span className="font-bold text-lg">{total}€</span>
        </div>

        <button
          className={`w-full py-2 px-4 bg-red-600 text-white font-bold rounded ${
            !addressSelected
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-red-700"
          }`}
          disabled={!addressSelected || loading} // Asegúrate de que el botón esté deshabilitado mientras se está cargando
          onClick={onPay}
        >
          {loading ? "Cargando..." : "Pagar"}
        </button>
      </div>
    </div>
  );
}
