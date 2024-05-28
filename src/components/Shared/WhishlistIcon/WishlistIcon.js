import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

export function WishlistIcon(props) {
  const { productId, className } = props;

  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={classNames(
        "text-red-600 hover:opacity-60 cursor-pointer",
        className
      )}
    />
  );
}
