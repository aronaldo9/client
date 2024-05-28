import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";
import { Wishlist } from "@/api";
import { useAuth } from "@/hooks";
import { useEffect, useState } from "react";

const wishlistCtrl = new Wishlist();

export function WishlistIcon(props) {
  const { productId, className, removeCallback } = props;
  const [hasWishlist, setHasWishlist] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await wishlistCtrl.check(user.id, productId);
        setHasWishlist(response);
      } catch (error) {
        setHasWishlist(false);
        console.error(error);
      }
    })();
  }, [productId]);

  const addWishlist = async () => {
    const response = await wishlistCtrl.add(user.id, productId);
    setHasWishlist(response);
  };

  const deleteWishlist = async () => {
    try {
      await wishlistCtrl.delete(hasWishlist.id);
      setHasWishlist(false);

      if (removeCallback) {
        removeCallback();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (hasWishlist === null) return null;

  return (
    <FontAwesomeIcon
      icon={hasWishlist ? faHeartSolid : faHeartRegular}
      onClick={hasWishlist ? deleteWishlist : addWishlist}
      className={classNames(
        hasWishlist ? "text-red-600" : "text-gray-600",
        "hover:opacity-60 cursor-pointer",
        className
      )}
    />
  );
}
