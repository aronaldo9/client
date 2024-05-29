import { ENV } from "@/utils";

export class Cart {
  add(productId) {
    localStorage.setItem(ENV.CART, JSON.stringify([productId]));
  }
}
