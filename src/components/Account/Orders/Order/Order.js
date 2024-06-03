import { DateTime } from "luxon";
import { forEach, map } from "lodash";
import { useState } from "react";
import { BasicModal } from "@/components/Shared";
import { Image } from "semantic-ui-react";
import { fn } from "@/utils";

export function Order(props) {
  const { order } = props;
  const [showModal, setShowModal] = useState(false);
  const createdAt = new Date(order.attributes.createdAt).toISOString();
  const products = order.attributes.products;
  const address = order.attributes.shippingAddress;

  const openCloseModal = () => setShowModal((prevState) => !prevState);

  const getTotalProducts = () => {
    let total = 0;

    forEach(products, (product) => {
      total += product.quantity;
    });

    return total;
  };

  return (
    <>
      <div
        className="bg-gray-200 w-full rounded-lg p-5 flex mb-5 justify-between items-center border-2 border-transparent hover:cursor-pointer hover:border-red-500"
        onClick={openCloseModal}
      >
        <div>
          <span className="text-xs text-gray-500">
            {DateTime.fromISO(createdAt, { locale: "es" }).toFormat(
              "dd/MM/yyyy"
            )}
          </span>
          <p className="font-bold text-xl">{getTotalProducts()} productos</p>
        </div>

        <p className="font-bold text-xl">
          {order.attributes.totalPayment.toFixed(2)}€
        </p>
      </div>

      <BasicModal
        show={showModal}
        onClose={openCloseModal}
        title="Información del pedido"
      >
        {map(products, (product, index) => (
          <div
            key={index}
            className="flex mb-5 pb-5 border-b border-gray-500 last:mb-0 last:pb-0 last:border-0"
          >
            <Image
              src={product.attributes.img.data.attributes.url}
              className="w-24 rounded-lg mr-5"
            />

            <div className="flex w-full">
              <div className="flex flex-col py-2 w-full">
                <div>
                  <p className="font-bold">{product.attributes.name}</p>
                  <p className="text-gray-500 text-xs">
                    {product.attributes.category.data.attributes.title}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="ml-4 font-bold">x{product.quantity}</span>
                <span className="ml-4">
                  {fn.calcDiscount(
                    product.attributes.price,
                    product.attributes.discount
                  )}
                  €
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="mb-5 border-b border-gray-500 bg-white p-5 rounded-lg">
          <div>
            <p className="font-bold text-lg">{address.attributes.title}</p>
            <p className="text-gray-500 text-lg">
              {address.attributes.username}, {address.attributes.address},{" "}
              {address.attributes.state}, {address.attributes.city},{" "}
              {address.attributes.postal_code}
            </p>
          </div>
        </div>

        <div className="text-right text-xl font-bold text-red-500">
          <p>TOTAL: {order.attributes.totalPayment.toFixed(2)}€</p>
        </div>
      </BasicModal>
    </>
  );
}
