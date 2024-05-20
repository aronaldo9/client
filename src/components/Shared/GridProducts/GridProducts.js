import { map } from "lodash";
import Link from "next/link";
import { Label } from "../Label";
import { fn } from "@/utils";

export function GridProducts(props) {
  const { products } = props;

  return (
    <div className="flex flex-wrap mt-5 -mx-2 md:w-3/4 md:mx-auto">
      {map(products, (product) => {
        const imgUrl = product.attributes.img.data.attributes.url;
        const productName = product.attributes.name;
        const productPrice = product.attributes.price;
        const productDiscount = product.attributes.discount;

        return (
          <Link
            key={product.id}
            href={`/${product.attributes.slug}`}
            className="w-80 mx-auto sm:w-1/2 md:w-1/3 mb-8 p-2 hover:text-red-600"
          >
            <div className="relative h-full bg-white p-2 shadow-md rounded-lg hover:opacity-60">
              {imgUrl && (
                <div className="relative">
                  <img
                    src={imgUrl}
                    alt={productName}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                  {product.attributes.discount > 0 && (
                    <Label.Discount className="absolute left-2 bottom-1">
                      {`-${product.attributes.discount}%`}
                    </Label.Discount>
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-between px-2">
              <span>{productName}</span>
              <span className="text-xl">
                {fn.calcDiscount(productPrice, productDiscount)}€
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
