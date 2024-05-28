import { map } from "lodash";
import Link from "next/link";
import { Label, WishlistIcon } from "@/components/Shared";
import { fn } from "@/utils";

export function GridProductsWishlist(props) {
  const { wishlist, onReload } = props;
  return (
    <div className="flex flex-wrap -m-2 mt-5">
      {map(wishlist, (item) => {
        const product = item.attributes.product.data;
        return (
          <div key={item.id} className="relative w-full sm:w-1/2 lg:w-1/3 mb-2">
            <Link
              href={`/${product.attributes.slug}`}
              className="text-black hover:text-red-500"
            >
              <div className="relative p-2 pt-0 hover:opacity-60">
                <img
                  src={product.attributes.img.data.attributes.url}
                  className="w-3/5 mx-auto sm:w-3/5 lg:w-full rounded-lg"
                />
                {product.attributes.discount > 0 && (
                  <Label.Discount className="absolute left-2 bottom-1">
                    {`-${product.attributes.discount}%`}
                  </Label.Discount>
                )}
              </div>
              <div className="flex justify-between w-3/5 mx-auto lg:w-full pt-0 px-4">
                <span>{product.attributes.name}</span>
                <span className="text-lg">
                  {fn.calcDiscount(
                    product.attributes.price,
                    product.attributes.discount
                  )}
                  €
                </span>
              </div>
            </Link>

            <WishlistIcon
              productId={product.id}
              className="absolute top-5 right-4 text-lg z-10"
              removeCallback={onReload}
            />
          </div>
        );
      })}
    </div>
  );
}
