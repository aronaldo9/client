import { Separator } from "@/components/Shared";
import { Addresses } from "./Addresses";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { ENV } from "@/utils";
import { Elements } from "@stripe/react-stripe-js";
import { Payment } from "./Payment";
import { Resume } from "./Resume";

const stripeInit = loadStripe(ENV.STRIPE_TOKEN);

export function StepTwo(props) {
  const { products } = props;
  const [addressSelected, setAddressSelected] = useState(null);

  return (
    <Elements stripe={stripeInit}>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-2/3 md:pr-5">
          <Addresses
            addressSelected={addressSelected}
            setAddressSelected={setAddressSelected}
          />
          <Separator height={50} />
          {addressSelected && <Payment />}
        </div>

        <div className="w-full md:w-1/3 md:pl-5 mt-5 md:mt-0">
          <Resume products={products} addressSelected={addressSelected} />
        </div>
      </div>
    </Elements>
  );
}
