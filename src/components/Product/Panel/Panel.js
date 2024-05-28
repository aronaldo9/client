import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTag } from "@fortawesome/free-solid-svg-icons";
import { fn } from "@/utils";
import { WishlistIcon } from "@/components/Shared/WhishlistIcon";

export function Panel(props) {
  const { productId, product } = props;

  const category = product.category.data;
  const pvp = fn.calcDiscount(product.price, product.discount);

  return (
    <div className="relative flex flex-col md:flex-row mt-[-150px] w-[90%] md:w-[80%] mx-auto">
      <div className="w-full md:w-1/2 pr-0 md:pr-3">
        <div className="rounded-[15px] overflow-hidden backdrop-filter backdrop-blur-md bg-white bg-opacity-70">
          <img
            src={product.img.data.attributes.url}
            alt={product.name}
            className="w-full md:max-w-lg max-w-md h-auto mx-auto"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 pl-0 md:pl-3 h-full mt-5 md:mt-0">
        <div className="bg-gray-200 bg-opacity-70 backdrop-blur-[15px] rounded-[15px] p-5 flex flex-col items-center">
          <h2 className="mb-2 text-center">{product.name}</h2>

          <div className="bg-gray-500 bg-opacity-70 backdrop-blur-[15px] flex py-1.5 px-4 rounded-full mb-10">
            <span className="flex items-center border-r border-white pr-2.5 mr-2.5 text-xs">
              <img
                src={category.attributes.icon.data.attributes.url}
                alt={category.attributes.name}
                className="filter invert brightness-0 h-4 mr-2.5"
              />
              {category.attributes.name}
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-400 mr-1.5 text-sm"
              />
              En stock
            </span>
          </div>

          <div className="mb-10 text-center">
            {product.discount > 0 && (
              <>
                <span className="text-lg line-through mr-2">
                  <FontAwesomeIcon icon={faTag} className="text-sm mr-1" />
                  {product.price}€
                </span>
                <span className="text-red-600 font-bold text-lg mr-2">
                  -{product.discount}%
                </span>
              </>
            )}
            <span className="text-4xl">{pvp}€</span>
          </div>

          <button className="bg-red-600 text-white py-2 px-4 rounded w-full hover:bg-red-800">
            Comprar ahora
          </button>

          <WishlistIcon
            productId={productId}
            className="absolute top-4 right-4 text-2xl text-red-600"
          />
        </div>
      </div>
    </div>
  );
}
