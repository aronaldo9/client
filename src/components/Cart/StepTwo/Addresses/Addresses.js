import { Address } from "@/api";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks";
import { map } from "lodash";
import classNames from "classnames";

const addressCtrl = new Address();

export function Addresses(props) {
  const { addressSelected, setAddressSelected } = props;
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);
        setAddresses(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <h2 className="mb-4 text-lg">Dirección</h2>

      {map(addresses, (address) => (
        <div
          key={address.id}
          onClick={() => setAddressSelected(address)}
          className={classNames(
            "border-2 border-black w-full rounded-lg p-5 flex flex-col mb-2 cursor-pointer",
            {
              "border-red-500": address.id === addressSelected?.id,
              "hover:border-red-500": true,
            }
          )}
        >
          <p>
            {address.attributes.username} ({address.attributes.title})
          </p>
          <p className="text-gray-500">
            {address.attributes.address}, {address.attributes.postal_code},{" "}
            {address.attributes.state}, {address.attributes.city}
          </p>
        </div>
      ))}
    </div>
  );
}
