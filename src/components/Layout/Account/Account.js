import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const total = 5;

export function Account() {
  const { user } = useAuth();
  const router = useRouter();

  const goToLogin = () => router.push("/join/sign-in");
  const goToAccount = () => router.push("/account");
  const goToCart = () => {
    if (!user) {
      goToLogin();
    } else {
      router.push("/cart");
    }
  };

  return (
    <div className="account flex items-center">
      <button
        className={classNames(
          "bg-transparent",
          "text-black",
          "hover:text-red-500",
          "focus:outline-none",
          "transition-colors duration-300",
          "mr-4"
        )}
        onClick={goToCart}
      >
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        {total > 0 && (
          <span className="bg-red-600 text-white rounded-full px-2 py-1 text-xs">
            {total}
          </span>
        )}
      </button>

      <button
        className={classNames(
          "bg-transparent",
          user ? "text-black" : "text-red-500",
          "hover:text-red-500",
          "focus:outline-none",
          "transition-colors duration-300"
        )}
        onClick={user ? goToAccount : goToLogin}
      >
        <FontAwesomeIcon icon={faUser} />
      </button>
    </div>
  );
}
