import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Button, Icon, Label } from "semantic-ui-react";

// TODO: ...
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
    <div className="account">
      <Button icon className="cart">
        <Icon name="cart" onClick={goToCart} />
        {total > 0 && <Label circular>{total}</Label>}
      </Button>

      <Button icon className={classNames({ ["user"]: user })}>
        <Icon name="user" onClick={user ? goToAccount : goToLogin} />
      </Button>
    </div>
  );
}
