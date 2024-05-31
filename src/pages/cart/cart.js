import { Product } from "@/api";
import { useCart } from "@/hooks";
import { CartLayout } from "@/layouts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Cart } from "@/components/Cart";

const productCtrl = new Product();

export default function CartPage() {
  const {
    query: { step = 1 },
  } = useRouter();
  const currentStep = Number(step);
  const [products, setProducts] = useState(null);
  const { cart } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const data = [];
        if (cart) {
          for await (const item of cart) {
            const response = await productCtrl.getProductById(item.id);
            data.push({ ...response.data, quantity: item.quantity });
          }

          setProducts(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);

  return (
    <>
      <CartLayout>
        {currentStep === 1 && <Cart.StepOne products={products} />}
        {currentStep === 2 && <p>Step TWO</p>}
        {currentStep === 3 && <p>Step THREE</p>}
      </CartLayout>
    </>
  );
}
