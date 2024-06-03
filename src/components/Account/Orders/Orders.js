import { useEffect, useState } from "react";
import { Order as OrderCtrl } from "@/api";
import { NoResult } from "@/components/Shared";
import { useAuth } from "@/hooks";
import { map } from "lodash";
import { Order } from "./Order";

const orderCtrl = new OrderCtrl();

export function Orders() {
  const [orders, setOrders] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await orderCtrl.getAll(user.id);
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!orders) {
    return <NoResult text="No has comprado ningún producto" />;
  }
  return (
    <div>
      {map(orders, (order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
}
