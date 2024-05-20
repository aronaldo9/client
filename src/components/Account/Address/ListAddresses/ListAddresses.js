import { Address as AddressCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { map } from "lodash";
import { Address } from "./Address";
import { useEffect, useState } from "react";

const addressCtrl = new AddressCtrl();

export function ListAddresses(props) {
  const { reload, onReload } = props;
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
  }, [reload]);

  if (!addresses) return null;

  return (
    <div className="mt-12">
      {map(addresses, (address) => (
        <Address
          key={address.id}
          addressId={address.id}
          address={address.attributes}
          onReload={onReload}
        />
      ))}
    </div>
  );
}
