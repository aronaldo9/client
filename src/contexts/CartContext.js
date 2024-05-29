import { Cart } from "@/api";
import { createContext, useEffect, useState } from "react";

const cartCtrl = new Cart();

export const CartContext = createContext();

export function CartProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // TODO: Obtener carrito
  }, []);

  const addCart = (productId) => {
    cartCtrl.add(productId);
  };

  const data = {
    cart,
    addCart,
    total,
    deleteItem: () => {},
    deleteAllItems: () => {},
    changeQuantityItem: () => {},
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
