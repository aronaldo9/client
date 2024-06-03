import { CardElement } from "@stripe/react-stripe-js";

export function Payment() {
  const cardStyle = {
    style: {
      base: {
        color: "#000",
        fontSize: "16px",
        "::placeholder": {
          color: "#909090",
        },
      },
    },
  };
  return (
    <div className="w-full">
      <h2 className="mb-4 text-lg">Métodos de pago</h2>

      <div className="bg-gray-200 w-full rounded-lg p-5 flex flex-col">
        <CardElement options={cardStyle} />
      </div>
    </div>
  );
}
